window.onload = async function () {
    const fallbackVersion = "d2x-v11-beta2";

    async function fetchLatestVersion() {
        try {
            const response = await fetch("https://api.github.com/repos/wiidev/d2x-cios/releases/latest");
            if (!response.ok) throw new Error("API request failed");
            const data = await response.json();
            return data.name || fallbackVersion;
        } catch {
            return fallbackVersion;
        }
    }

    function replaceVersion(version) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
            acceptNode: (node) => {
                if (node.nodeType === Node.TEXT_NODE && (node.nodeValue.includes("d2x-currentversion-vWii") || node.nodeValue.includes("d2x-currentversion"))) {
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
                    .replace(/d2x-currentversion-vWii/g, version + "-vWii")
                    .replace(/d2x-currentversion/g, version);
            } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                const href = currentNode.getAttribute("href");
                currentNode.setAttribute(
                    "href",
                    href.replace(/d2x-currentversion-vWii/g, version + "-vWii").replace(/d2x-currentversion/g, version)
                );
            }
        }
    }

    const latestVersion = await fetchLatestVersion();
    replaceVersion(latestVersion);
};