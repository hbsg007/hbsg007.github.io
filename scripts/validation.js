// Keep validation links pointed at the page being viewed on either host.
// The data-validator attributes identify the two links without styling classes.
document.querySelectorAll("a[data-validator]").forEach(function (link) {
    const address = encodeURIComponent(window.location.href.split("#")[0]);
    if (link.dataset.validator === "html") {
        link.href = "https://validator.w3.org/nu/?doc=" + address;
    } else {
        link.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + address;
    }
});
