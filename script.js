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

typeEffect();

// particlesJS("particles-js", {
//   particles: {
//     number: { value: 80 },
//     color: { value: "#ffffff" },
//     size: { value: 2 },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     },
//     move: { speed: 3 }
//   },
//   interactivity: {
//     events: {
//       onhover: { enable: true, mode: "grab" }
//     }
//   }
// });

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

const filters = document.querySelectorAll(".filters li");
const projects = document.querySelectorAll(".project");
const modal = document.querySelector(".modal");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;

    projects.forEach((project) => {
      project.style.display =
        category === "all" || project.dataset.category === category
          ? "block"
          : "none";
    });
  });
});

/* MODAL LOGIC */
projects.forEach((project) => {
  project.addEventListener("click", () => {
    document.getElementById("modal-img").src = project.dataset.img;
    document.getElementById("modal-title").innerText = project.dataset.title;
    document.getElementById("modal-desc").innerText = project.dataset.desc;
    document.getElementById("modal-link").href = project.dataset.link;

    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};


// contact form js

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Komal Tech Studio!");
  this.reset();
});
