// Typing effect for hero section
const words = ["Frontend Developer", "WordPress Specialist", "SEO & Marketing", "Content Writer"];
let i = 0; let j = 0; let currentWord = ''; let isDeleting = false; const typing = document.getElementById('typing');

function type() {
  if(i >= words.length) i=0;
  const fullWord = words[i];

  if(!isDeleting){
    currentWord = fullWord.slice(0,j+1);
    typing.textContent = currentWord;
    j++;
    if(j === fullWord.length){ isDeleting = true; setTimeout(type,1000); return; }
  } else {
    currentWord = fullWord.slice(0,j-1);
    typing.textContent = currentWord;
    j--;
    if(j===0){ isDeleting=false; i++; }
  }
  setTimeout(type,150);
}
type();

// Scroll reveal for roles
const roles = document.querySelectorAll('.role');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.1;
  roles.forEach(role => {
    const top = role.getBoundingClientRect().top;
    if(top < triggerBottom){
      role.style.opacity = 1;
      role.style.transform = 'translateY(0)';
    } else {
      role.style.opacity = 0;
      role.style.transform = 'translateY(30px)';
    }
  });
});

// Project card click (demo alert)
const projects = document.querySelectorAll('.project-card');
projects.forEach(proj => {
  proj.addEventListener('click', () => {
    alert(proj.querySelector('h3').textContent + '\n\nMore details coming soon...');
  });
});
