
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const navigationLinks = document.querySelectorAll(".navigation a");
  const yearElement = document.querySelector("#current-year");

  // Keep the footer year up to date.
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Open and close the mobile navigation menu.
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after a navigation link is selected.
    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    // Close the menu with the Escape key.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
