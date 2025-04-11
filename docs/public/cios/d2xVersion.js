
/*
$(function () {
    $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest").done(function (json) {
        walkText(document.body, json.name);

        const collection = document.getElementsByTagName("a");
        for (let i = 0; i < collection.length; i++) {
            const node = collection[i].attributes[0];
            node.nodeValue = node.nodeValue.replace(/d2x-currentversion/g, json.name);
        }
    }).fail(function () {
        const lastKnownVersion = "d2x-v11-beta3";

        walkText(document.body, lastKnownVersion);
        const collection = document.getElementsByTagName("a");
        for (let i = 0; i < collection.length; i++) {
            const node = collection[i].attributes[0];
            node.nodeValue = node.nodeValue.replace(/d2x-currentversion/g, lastKnownVersion);
        }
    })
});

function walkText(node, newVersion) {
    if (node.nodeType == 3) {
        node.data = node.data.replace(/d2x-currentversion/g, newVersion);
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
            walkText(node.childNodes[i], newVersion);
        }
    }
}
*/

/*
$(function () {
    const fallbackVersion = "d2x-v11-beta2";

    function fetchLatestVersion() {
        return $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest")
            .then((data) => data.name || fallbackVersion)
            .catch(() => fallbackVersion);
    }

    function replaceVersion(version) {
        // Replace text nodes
        $("*:not(script)").contents().filter(function () {
            return this.nodeType === Node.TEXT_NODE && (this.nodeValue.includes("d2x-currentversion-vWii") || this.nodeValue.includes("d2x-currentversion"));
        }).each(function () {
            this.nodeValue = this.nodeValue
                .replace(/d2x-currentversion-vWii/g, version + "-vWii")
                .replace(/d2x-currentversion/g, version);
        });

        // Replace href attributes in <a> elements
        $("a[href*='d2x-currentversion']").each(function () {
            const href = $(this).attr("href");
            $(this).attr("href", href
                .replace(/d2x-currentversion-vWii/g, version + "-vWii")
                .replace(/d2x-currentversion/g, version));
        });
    }

    fetchLatestVersion().then((latestVersion) => {
        replaceVersion(latestVersion);
    });
});
*/

/*
$(function () {
    const fallbackVersion = "d2x-v11-beta2";

    function fetchLatestVersion() {
        return $.getJSON("https://api.github.com/repos/wiidev/d2x-cios/releases/latest")
            .then((data) => data.name || fallbackVersion)
            .catch(() => fallbackVersion);
    }

    function replaceVersion(version) {
        const versionVWii = version + "-vWii";

        // Replace text nodes and href attributes in one pass
        $("body *:not(script)").each(function () {
            // Replace text nodes
            $(this).contents().filter(function () {
                return this.nodeType === Node.TEXT_NODE && (this.nodeValue.includes("d2x-currentversion-vWii") || this.nodeValue.includes("d2x-currentversion"));
            }).each(function () {
                this.nodeValue = this.nodeValue
                    .replace(/d2x-currentversion-vWii/g, versionVWii)
                    .replace(/d2x-currentversion/g, version);
            });

            // Replace href attributes
            if (this.nodeName === "A" && this.hasAttribute("href")) {
                const href = this.getAttribute("href");
                if (href.includes("d2x-currentversion-vWii") || href.includes("d2x-currentversion")) {
                    this.setAttribute(
                        "href",
                        href.replace(/d2x-currentversion-vWii/g, versionVWii).replace(/d2x-currentversion/g, version)
                    );
                }
            }
        });
    }

    fetchLatestVersion().then(replaceVersion);
});
*/

window.onload = function () {
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

    function replaceVersion(version) {
        const versionVWii = version + "-vWii";

        // Traverse all elements in the body
        const elements = document.body.querySelectorAll("*:not(script)");

        elements.forEach((element) => {
            // Replace text nodes
            element.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue
                        .replace(/d2x-currentversion-vWii/g, versionVWii)
                        .replace(/d2x-currentversion/g, version);
                }
            });

            // Replace href attributes in <a> elements
            if (element.nodeName === "A" && element.hasAttribute("href")) {
                const href = element.getAttribute("href");
                element.setAttribute(
                    "href",
                    href
                        .replace(/d2x-currentversion-vWii/g, versionVWii)
                        .replace(/d2x-currentversion/g, version)
                );
            }
        });
    }

    fetchLatestVersion().then(replaceVersion);
};
