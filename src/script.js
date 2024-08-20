// Navbar Fixed
// window.onscroll = function () {
//     const header = document.querySelector('header')
//     const fixedNav = header.offsetTop
//     const toTop = document.querySelector('#to-top')

//     if (window.pageYOffset > fixedNav) {
//         header.classList.add('navbar-fixed')
//     } else {
//         header.classList.remove('navbar-fixed')
//     }
// }

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

// // Darkmode toggle
// const darkToggle = document.querySelector('#dark-toggle')
// const html = document.querySelector('html')

// darkToggle.addEventListener('click', function () {
//     if (darkToggle.checked) {
//         html.classList.add('dark')
//         localStorage.theme = 'dark'
//     } else {
//         html.classList.remove('dark')
//         localStorage.theme = 'light'
//     }
// })

// // Pindahkan posisi toggle sesuai mode
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     darkToggle.checked = true
// } else {
//   darkToggle.checked = false
// }

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
    darkIcon.textContent = '☀'; // Tampilkan icon matahari
} else {
    darkToggle.checked = false;
    html.classList.remove('dark');
    body.classList.add('light');
    body.classList.remove('dark');
    picture1.classList.replace('hidden-picture', 'visible-picture');
    picture2.classList.replace('visible-picture', 'hidden-picture');
    darkIcon.textContent = '🌙'; // Tampilkan icon bulan
}

// Fungsi untuk animasi perubahan icon
function animateIconChange(newIcon) {
    // Tambahkan animasi "scale-up"
    darkIcon.classList.add('scale-up');

    // Tunggu hingga animasi selesai, lalu ganti icon dan tambahkan animasi "scale-down"
    setTimeout(() => {
        darkIcon.textContent = newIcon;
        darkIcon.classList.remove('scale-up');
        darkIcon.classList.add('scale-down');
    }, 300); // Waktu sesuai dengan durasi animasi (0.3s)

    // Hapus animasi "scale-down" setelah selesai
    setTimeout(() => {
        darkIcon.classList.remove('scale-down');
    }, 600); // 300ms (scale-up) + 300ms (scale-down)
}


let typed = new Typed('.multipleText', {
    strings: ['FRESHGRADUATE', 'WEB DEVELOPER', 'LOGO DESIGNER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})