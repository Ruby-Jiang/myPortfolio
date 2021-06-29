const navToggle = document.querySelector('.hamburger');
const navCancel = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.side-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navToggle.addEventListener('mouseenter', () => {
    const hamStroke = document.querySelectorAll('path');
    hamStroke.forEach(line => line.style.stroke = "#e04516");
});

navToggle.addEventListener('mouseleave', () => {
    const hamStroke = document.querySelectorAll('path');
    hamStroke.forEach(line => line.style.stroke = "#fff");
});

navCancel.addEventListener('click',() =>{
    document.body.classList.remove('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    })
});