const navToggle = document.querySelector('.hamburger');
const navCancel = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.side-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navCancel.addEventListener('click',() =>{
    document.body.classList.remove('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    })
});