const iconToggle = document.querySelector('.toggle_icon');
const navMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});

iconClose.addEventListener('click', () => {
    navMenu.classList.remove('active')
})

menuLinks.forEach((menulink) => {
    menulink.addEventListener('click', () => {
        navMenu.classList.remove('active')
    })
})