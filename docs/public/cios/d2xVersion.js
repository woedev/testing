window.onload = function () {
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
};