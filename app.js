/**
 * @file This script handles the interactive elements of the CODE website,
 * including the hamburger menu, FAQ accordion, review card animations, and
 * scroll animations.
 * @author Lennox Galanje
 * @version 1.0.0
 */

/**
 * Manages the behavior of the hamburger menu.
 */
function handleHamburgerMenu() {
  const getMenu = document.getElementById("get-menu");
  const toggleMenu = document.querySelector(".toggle-menu");
  const closeIcon = document.querySelector(".icon-toggle__close");

  // Open Menu
  getMenu.addEventListener("click", () => {
    toggleMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Close Menu
  closeIcon.addEventListener("click", () => {
    toggleMenu.style.display = "none";
    document.body.style.overflow = "";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      toggleMenu.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  const menuLinks = document.querySelectorAll(".toggle-menu__item .link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu.style.display = "none";
      document.body.style.overflow = "";
    });
  });
}

/**
 * Controls the FAQ accordion feature.
 */
function handleFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-card__question");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const currentAnswer = item.nextElementSibling;
      const currentIcon = item.querySelector(".faq-card__icon");

      // Close all other answers
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector(".faq-card__icon");

        if (otherItem !== item) {
          otherAnswer.classList.remove("show");
          otherIcon.textContent = "+";
        }
      });

      // Toggle current answer
      const isOpen = currentAnswer.classList.contains("show");
      currentAnswer.classList.toggle("show", !isOpen);
      currentIcon.textContent = isOpen ? "+" : "-";
    });
  });
}

/**
 * Manages the animated stack of review cards.
 */
function handleReviewCards() {
  const cards = Array.from(document.querySelectorAll(".review__card"));
  let angleStep = -10;

  function applyStackTransforms() {
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
      card.style.transform = `translate(-50%, -50%) rotate(${
        angleStep * index
      }deg)`;
      card.style.transition = "transform 1.5s ease, z-index 0.5s ease";
    });
  }

  function shuffleStack() {
    const topCard = cards.shift();
    cards.push(topCard);
    applyStackTransforms();
  }

  applyStackTransforms();

  setInterval(shuffleStack, 5000);
}

/**
 * Initializes the Animate On Scroll (AOS) library.
 */
function initializeAOS() {
  AOS.init();
}

/**
 * Main entry point for the application.
 */
document.addEventListener("DOMContentLoaded", () => {
  handleHamburgerMenu();
  handleFAQAccordion();
  handleReviewCards();
  initializeAOS();
});
