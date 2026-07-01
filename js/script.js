const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const copyEmailButton = document.querySelector(".copy-email-button");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Copied!";
      window.setTimeout(() => {
        copyEmailButton.textContent = "Copy Email";
      }, 1800);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  });
}
