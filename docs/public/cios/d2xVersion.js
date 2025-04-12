/*
document.addEventListener("DOMContentLoaded", async function () {
    const fallbackVersion = "d2x-v11-beta2";

    async function fetchLatestVersion() {
        try {
            const response = await fetch("https://api.github.com/repos/wiidev/d2x-cios/releases/latest");
            console.log("Got this far (fetchLatestVersion)");
            if (!response.ok) throw new Error("API request failed");
            const data = await response.json();
            return data.name || fallbackVersion;
        } catch {
            return fallbackVersion;
        }
    }

    function replaceVersion(version) {
        console.log("Got this far (replaceVersion)");
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
});
*/

console.log("d2xVersion.js loaded");


document.addEventListener("DOMContentLoaded", function () {
    const fallbackVersion = "d2x-v11-beta2";

    function fetchLatestVersion() {
        return fetch("https://api.github.com/repos/wiidev/d2x-cios/releases/latest")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch latest version");
                return response.json();
            })
            .then((data) => data.name || fallbackVersion)
            .catch(() => fallbackVersion);
    }

    function replaceVersionInNode(node, version, versionVWii) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = node.nodeValue
                .replace(/d2x-currentversion-vWii/g, versionVWii)
                .replace(/d2x-currentversion/g, version);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === "A" && node.hasAttribute("href")) {
            const href = node.getAttribute("href");
            node.setAttribute(
                "href",
                href.replace(/d2x-currentversion-vWii/g, versionVWii).replace(/d2x-currentversion/g, version)
            );
        }
    }

    function replaceVersion(version) {
        const versionVWii = version + "-vWii";

        // Traverse all existing elements
        document.body.querySelectorAll("*:not(script)").forEach((element) => {
            element.childNodes.forEach((node) => replaceVersionInNode(node, version, versionVWii));
        });

        // Observe future changes to the DOM
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        node.querySelectorAll("*:not(script)").forEach((child) => {
                            child.childNodes.forEach((childNode) => replaceVersionInNode(childNode, version, versionVWii));
                        });
                    }
                    replaceVersionInNode(node, version, versionVWii);
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    fetchLatestVersion().then(replaceVersion);
});


/*
(function () {
    const fallbackVersion = "d2x-v11-beta2";

    async function fetchLatestVersion() {
        try {
            const response = await fetch("https://api.github.com/repos/wiidev/d2x-cios/releases/latest");
            console.log("Got this far (fetchLatestVersion)");
            if (!response.ok) throw new Error("API request failed");
            const data = await response.json();
            return data.name || fallbackVersion;
        } catch {
            return fallbackVersion;
        }
    }

    function replaceVersion(version) {
        console.log("Got this far (replaceVersion)");
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
                if (href) {
                    currentNode.setAttribute(
                        "href",
                        href.replace(/d2x-currentversion-vWii/g, version + "-vWii").replace(/d2x-currentversion/g, version)
                    );
                }
            }
        }
    }

    async function initialize() {
        const latestVersion = await fetchLatestVersion();
        replaceVersion(latestVersion);
    }

    // Run on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", initialize);

    // Run on window.onload for additional safety
    window.onload = initialize;

    // Observe dynamically added content
    const observer = new MutationObserver(() => {
        fetchLatestVersion().then(replaceVersion);
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
*/