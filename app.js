/**
 * @file This script handles the interactive elements of the CODE website,
 * including the hamburger menu, FAQ accordion, review card animations, and
 * scroll animations.
 * @author Lennox Galanje
 * @version 1.0.0
 */

/**
 * Manages the behavior of the hamburger menu.
 *
 * This function adds click event listeners to the menu and close icons
 * to toggle the visibility of the mobile navigation menu.
 * @returns {void}
 */
function handleHamburgerMenu() {
  const getMenu = document.getElementById("get-menu");
  const toggleMenu = document.querySelector(".toggle-menu");
  const closeIcon = document.querySelector(".icon-toggle__close");

  getMenu.addEventListener("click", () => {
    toggleMenu.style.display = "flex";
  });

  closeIcon.addEventListener("click", () => {
    toggleMenu.style.display = "none";
  });
}

/**
 * Controls the FAQ accordion feature.
 *
 * This function allows users to click on a question to expand the answer
 * while collapsing any other open answers. It also updates the icon
 * to indicate the state (open/closed).
 * @returns {void}
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
 *
 * This function creates a shuffling effect for the review cards, where
 * they are stacked and rotated. The top card is periodically moved to the
 * bottom of the stack to create a continuous animation loop.
 * @returns {void}
 */
function handleReviewCards() {
  const cards = Array.from(document.querySelectorAll(".review__card"));
  let angleStep = -10;

  /**
   * Applies CSS transforms to stack and rotate the cards.
   * @returns {void}
   */
  function applyStackTransforms() {
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
      card.style.transform = `translate(-50%, -50%) rotate(${
        angleStep * index
      }deg)`;
      card.style.transition = "transform 1.5s ease, z-index 0.5s ease";
    });
  }

  /**
   * Shuffles the card stack by moving the first card to the end.
   * @returns {void}
   */
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
 *
 * This function starts the AOS library, which enables animations
 * as elements scroll into view.
 * @returns {void}
 */
function initializeAOS() {
  AOS.init();
}

/**
 * Main entry point for the application.
 *
 * This function waits for the DOM to be fully loaded and then initializes
 * all the interactive components of the page.
 */
document.addEventListener("DOMContentLoaded", () => {
  handleHamburgerMenu();
  handleFAQAccordion();
  handleReviewCards();
  initializeAOS();
});
