"use strict";

// Each section is a real fragment destination. Hidden sections leave the tab order.
(() => {
    const sections = [...document.querySelectorAll("main > section")];
    const navLinks = [...document.querySelectorAll(".section-nav a")];
    const validIds = new Set(sections.map((section) => section.id));
    const heading = document.querySelector("header h1").textContent.trim();

    function showSection(id, moveFocus = false) {
        const selectedId = validIds.has(id) ? id : "what";
        sections.forEach((section) => {
            section.hidden = section.id !== selectedId;
        });
        navLinks.forEach((link) => {
            if (link.hash === `#${selectedId}`) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
        const activeHeading = document.getElementById(selectedId).querySelector("h2");
        document.title = `${heading} ✦ ${activeHeading.textContent.trim()}`;
        if (moveFocus) {
            activeHeading.focus({ preventScroll: true });
            document.getElementById("main-content").scrollIntoView({ block: "start" });
        }
    }

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href^='#']");
        if (!link || event.defaultPrevented || event.button !== 0 ||
            event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const id = link.getAttribute("href").slice(1);
        if (!validIds.has(id)) return;
        event.preventDefault();
        if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
        showSection(id, true);
    });

    // Hash changes include browser Back/Forward and directly edited fragment URLs.
    window.addEventListener("hashchange", () => {
        const id = location.hash.slice(1);
        if (id !== "main-content") showSection(id, true);
    });
    showSection(location.hash.slice(1));

    const checklist = document.getElementById("practice-checklist");
    checklist.addEventListener("submit", (event) => event.preventDefault());
    checklist.addEventListener("change", () => {
        const checked = checklist.querySelectorAll("input:checked").length;
        document.getElementById("practice-progress").textContent =
            `${checked} of 3 goals checked.${checked === 3 ? " Ready for the next rally!" : ""}`;
    });

    // Validator links target whichever public host the same files are uploaded to.
    if (location.protocol === "https:" || location.protocol === "http:") {
        const page = new URL(location.href);
        page.hash = "";
        page.search = "";
        const encoded = encodeURIComponent(page.href);
        document.querySelector('[data-validator="html"]').href =
            `https://validator.w3.org/nu/?doc=${encoded}`;
        document.querySelector('[data-validator="css"]').href =
            `https://jigsaw.w3.org/css-validator/validator?uri=${encoded}`;
        document.querySelector('[data-validator="accessibility"]').href =
            `https://wave.webaim.org/report#/${page.href}`;
    }
})();
