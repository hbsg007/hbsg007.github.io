// Preserve saved section links when an old assignment address moves.
// Used only by the small compatibility pages outside the course site.
(function () {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        const destination = new URL(canonical.href);
        destination.search = window.location.search;
        destination.hash = window.location.hash;
        window.location.replace(destination.href);
    }
}());
