const navLinks = document.querySelectorAll('.nav-link');

function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('text-primary'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      removeActiveClasses();
      activeLink.classList.add('text-primary');
    }
  });
}, {
  threshold: 0.7
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
});


// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const darkIcon = document.querySelector('#dark-icon');
const body = document.querySelector('body');
const picture1 = document.querySelector('#picture-1');
const picture2 = document.querySelector('#picture-2');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        animateIconChange('☀');
        html.classList.add('dark');
        body.classList.add('dark');
        body.classList.remove('light');
        picture1.classList.replace('visible-picture', 'hidden-picture');
        picture2.classList.replace('hidden-picture', 'visible-picture');
        localStorage.theme = 'dark';
    } else {
        animateIconChange('🌙');
        html.classList.remove('dark');
        body.classList.add('light');
        body.classList.remove('dark');
        picture1.classList.replace('hidden-picture', 'visible-picture');
        picture2.classList.replace('visible-picture', 'hidden-picture');
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
    html.classList.add('dark');
    body.classList.add('dark');
    body.classList.remove('light');
    picture1.classList.replace('visible-picture', 'hidden-picture');
    picture2.classList.replace('hidden-picture', 'visible-picture');
    darkIcon.textContent = '☀';
} else {
    darkToggle.checked = false;
    html.classList.remove('dark');
    body.classList.add('light');
    body.classList.remove('dark');
    picture1.classList.replace('hidden-picture', 'visible-picture');
    picture2.classList.replace('visible-picture', 'hidden-picture');
    darkIcon.textContent = '🌙';
}

// Fungsi untuk animasi perubahan icon
function animateIconChange(newIcon) {
    darkIcon.classList.add('scale-up');

    setTimeout(() => {
        darkIcon.textContent = newIcon;
        darkIcon.classList.remove('scale-up');
        darkIcon.classList.add('scale-down');
    }, 300)

    setTimeout(() => {
        darkIcon.classList.remove('scale-down');
    }, 600);
}


let typed = new Typed('.multipleText', {
    strings: ['FRESHGRADUATE', 'WEB DEVELOPER', 'LOGO DESIGNER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})