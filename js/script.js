// Dark theme
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheo = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun';

if (selectedTheo) {
    document.body.classList[selectedTheo === 'dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
console.log("it is working")

// menu show y hidden
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu')
    })
}


console.log("menu working")

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show_menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")


/* Typewriter */

new Typewriter('#typewriter', {
  strings: ['Chuqi Zhang', 'Software Develper'],
  autoStart: true,
  loop: true,
  cursor: "|"
});