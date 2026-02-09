

/* NAVBAR SCROLL EFFECT */
 const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  });
/* TEXT ROTATION */
const words = [
  "WEB DEVELOPMENT",
  "WORDPRESS EXPERT",
  "SOCIAL MEDIA MARKETING",
  "SEO STRATEGY",
  "CONTENT WRITING",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("text");

function typeEffect() {
  const current = words[wordIndex];

  if (!isDeleting) {
    textElement.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    textElement.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

// typeEffect();


particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#fdfdfd" },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fdfdfd",
      opacity: 0.4,
      width: 1
    },
    move: { speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    }
  }
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Komal Tech Studio!");
  this.reset();
});



