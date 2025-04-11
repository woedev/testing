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

    const latestVersion = await fetchLatestVersion();
    replaceVersion(latestVersion);
};