const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  const mobileQuery = window.matchMedia("(max-width: 780px)");

  const syncNavAccess = () => {
    const isOpen = navLinks.getAttribute("data-open") === "true";
    if (mobileQuery.matches) {
      navLinks.setAttribute("aria-hidden", String(!isOpen));
    } else {
      navLinks.removeAttribute("aria-hidden");
    }
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.getAttribute("data-open") === "true";
    const nextIsOpen = !isOpen;
    navLinks.setAttribute("data-open", String(nextIsOpen));
    navToggle.setAttribute("aria-expanded", String(nextIsOpen));
    syncNavAccess();
  });

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", syncNavAccess);
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(syncNavAccess);
  }
  syncNavAccess();
}

const yearEl = document.querySelector("#js-year");
if (yearEl) {
  const year = new Date().getFullYear();
  yearEl.textContent = String(year);
}
