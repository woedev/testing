(async function () {
    async function fetchLatestVersion() {
        const FALLBACK_VERSION = "d2x-v11-beta2"; // Edit the version when necessary
        const VERSION_REGEX = /^d2x-v\d+-[a-zA-Z0-9]+$/;
        try {
            const response = await fetch("https://api.github.com/repos/wiidev/d2x-cios/releases");
            if (!response.ok) throw new Error("API request failed");
            const releases = await response.json();

            const latestRelease = releases.find(release => !release.prerelease && VERSION_REGEX.test(release.name));
            if (latestRelease) {
                return latestRelease.name;
            } else {
                return FALLBACK_VERSION;
            }
        } catch (error) {
            return FALLBACK_VERSION;
        }
    }

    function replaceVersion(version) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
            acceptNode: (node) => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("d2x-currentversion")) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === "A" && node.getAttribute("href")?.includes("d2x-currentversion")) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            }
        });

        let currentNode;
        while ((currentNode = walker.nextNode())) {
            if (currentNode.nodeType === Node.TEXT_NODE) {
                currentNode.nodeValue = currentNode.nodeValue
                    .replace(/d2x-currentversion-vWii/g, `${version}-vWii`)
                    .replace(/d2x-currentversion/g, version);
            } else if (currentNode.nodeName === "A") {
                const href = currentNode.getAttribute("href");
                if (href) {
                    currentNode.setAttribute(
                        "href",
                        href.replace(/d2x-currentversion-vWii/g, `${version}-vWii`)
                            .replace(/d2x-currentversion/g, version)
                    );
                }
            }
        }
    }

    const latestVersion = await fetchLatestVersion();
    replaceVersion(latestVersion);
})();
