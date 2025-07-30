// Scroll animation trigger
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

animateElements.forEach(el => {
  observer.observe(el);
});

// Optional: Scroll to section smoothly if internal link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  const allLinks = document.querySelectorAll(".nav-links a");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
