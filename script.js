/* NAVBAR SCROLL EFFECT */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
});

/* TEXT ROTATION */
const words = [
  "WEB DEVELOPER",
  "WORDPRESS EXPERT",
  "SOCIAL MEDIA MANAGER",
  "SEO STRATEGIST",
  "CONTENT WRITER"
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
      setTimeout(() => isDeleting = true, 1200);
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

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { speed: 3 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    }
  }
});


const filters = document.querySelectorAll(".filters li");
const projects = document.querySelectorAll(".project");
const modal = document.querySelector(".modal");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;

    projects.forEach(project => {
      project.style.display =
        category === "all" || project.dataset.category === category
        ? "block"
        : "none";
    });
  });
});

/* MODAL LOGIC */
projects.forEach(project => {
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

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
