const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  const closeMenu = () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}
