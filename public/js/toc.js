(() => {
  const TOC_ROOT_SELECTOR = "[data-toc]";
  const HEADING_SELECTOR = "article h2[id], article h3[id]";

  /** @type {IntersectionObserver | null} */
  let observer = null;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  /** @param {string | null} id */
  const setActive = (id, headings) => {
    /** @type {NodeListOf<HTMLElement>} */
    const tocs = document.querySelectorAll(TOC_ROOT_SELECTOR);
    if (tocs.length === 0) return;

    /** @param {HTMLElement} toc @param {string | null} targetId */
    const applyToToc = (toc, targetId) => {
      const scrollContainer = toc.querySelector("[data-toc-scroll]") || toc;

      /** @type {NodeListOf<HTMLAnchorElement>} */
      const links = toc.querySelectorAll('a[href^="#"]');

      for (const link of links) {
        link.removeAttribute("aria-current");
      }

      if (!targetId) return;

      const activeLink = toc.querySelector(`a[href="#${CSS.escape(targetId)}"]`);
      if (!(activeLink instanceof HTMLAnchorElement)) return;

      activeLink.setAttribute("aria-current", "location");

      if (scrollContainer instanceof HTMLElement) {
        const c = scrollContainer.getBoundingClientRect();
        const r = activeLink.getBoundingClientRect();
        const isAbove = r.top < c.top;
        const isBelow = r.bottom > c.bottom;

        if (isAbove || isBelow) {
          const targetTop = r.top - c.top + scrollContainer.scrollTop;
          const padding = 8;

          const nextScrollTop = isAbove
            ? Math.max(0, targetTop - padding)
            : Math.max(0, targetTop - scrollContainer.clientHeight + r.height + padding);

          scrollContainer.scrollTo({ top: nextScrollTop, behavior: "smooth" });
        }
      }
    };

    /** @param {string} desiredId */
    const fallbackToNearestH2 = (desiredId) => {
      const index = headings.findIndex((h) => h.getAttribute("id") === desiredId);
      if (index === -1) return desiredId;

      for (let i = index; i >= 0; i--) {
        const el = headings[i];
        if (el && el.tagName === "H2") {
          return el.getAttribute("id") || desiredId;
        }
      }

      return desiredId;
    };

    for (const toc of tocs) {
      if (!(toc instanceof HTMLElement)) continue;

      if (!id) {
        applyToToc(toc, null);
        continue;
      }

      const directMatch = toc.querySelector(`a[href="#${CSS.escape(id)}"]`);
      if (directMatch instanceof HTMLAnchorElement) {
        applyToToc(toc, id);
        continue;
      }

      applyToToc(toc, fallbackToNearestH2(id));
    }
  };

  const init = () => {
    cleanup();

    const toc = document.querySelector(TOC_ROOT_SELECTOR);
    if (!toc) return;

    /** @type {HTMLElement | null} */
    const header = document.querySelector("#header");
    const headerOffset = header ? header.offsetHeight : 64;

    /** @type {NodeListOf<HTMLElement>} */
    const headings = document.querySelectorAll(HEADING_SELECTOR);
    if (headings.length === 0) return;

    const headingsArr = Array.from(headings);

    let lastActiveId = null;

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => /** @type {HTMLElement} */ (entry.target));

        if (visible.length === 0) return;

        visible.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

        const active = visible[0];
        const id = active.getAttribute("id");
        if (!id || id === lastActiveId) return;

        lastActiveId = id;
        setActive(id, headingsArr);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${Math.round(headerOffset + 12)}px 0px -70% 0px`,
      },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    const initialId = location.hash ? location.hash.slice(1) : headings[0]?.getAttribute("id");
    setActive(initialId, headingsArr);
  };

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("astro:page-load", init);
  document.addEventListener("astro:before-swap", cleanup);
})();
