// Keep validation links pointed at the current page on either host.
// HTMLInclude inserts the footer asynchronously, so wait for its links.
// Updated with ChatGPT assistance for the shared-components assignment.
(function () {
    function updateValidationLinks() {
        const links = document.querySelectorAll("footer a[data-validator]");
        if (links.length === 0) {
            return false;
        }

        const address = encodeURIComponent(window.location.href.split("#")[0]);
        links.forEach(function (link) {
            if (link.dataset.validator === "html") {
                link.href = "https://validator.w3.org/nu/?doc=" + address;
            } else {
                link.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + address;
            }
        });
        return true;
    }

    if (updateValidationLinks()) {
        return;
    }

    const observer = new MutationObserver(function () {
        if (updateValidationLinks()) {
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}());
