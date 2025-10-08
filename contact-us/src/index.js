const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

// Hamburger animation elements
const hamburgerLine1 = document.getElementById('hamburger-line-1');
const hamburgerLine2 = document.getElementById('hamburger-line-2');
const hamburgerLine3 = document.getElementById('hamburger-line-3');

// Function to animate hamburger to X
function animateHamburgerToX() {
    hamburgerLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamburgerLine2.style.opacity = '0';
    hamburgerLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
}

// Function to animate X back to hamburger
function animateXToHamburger() {
    hamburgerLine1.style.transform = 'rotate(0deg) translate(0px, 0px)';
    hamburgerLine2.style.opacity = '1';
    hamburgerLine3.style.transform = 'rotate(0deg) translate(0px, 0px)';
}

// Function to open mobile menu
function openMobileMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    animateHamburgerToX();
}

// Function to close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.add('-translate-x-full');
    animateXToHamburger();
}

// Event listeners
menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('-translate-x-full')) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});

closeMenuBtn.addEventListener('click', closeMobileMenu);

// Close menu when clicking outside (optional enhancement)
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

// ======================================Footer Section=====================================

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
  }

  function selectService(service) {
    document.getElementById('selected-service').textContent = service;
    document.getElementById('dropdown-menu').classList.add('hidden');
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const button = document.querySelector('button[onclick="toggleDropdown()"]');
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add('hidden');
    }
  });

