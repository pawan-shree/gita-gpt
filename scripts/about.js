const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");
const devsBtn = document.getElementById("devs-btn");

logo.addEventListener('click', () => {
    location.href = 'index.html';
});

about.addEventListener('click', () => {
    location.href = 'about.html';
});

contact.addEventListener('click', () => {
    location.href = 'contact.html';
});

devs.addEventListener('click', () => {
    location.href = 'devs.html';
});

devsBtn.addEventListener('click', () => {
    location.href = 'devs.html';
});