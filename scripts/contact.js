window.addEventListener("load", function () {
    document.body.style.opacity = "1";
  });

const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");

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

document.getElementById('send-btn').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const subject = `Its ${encodeURIComponent(name)} from Gita GPT website`;
    const body = `${encodeURIComponent(message)}`;

    // Gmail compose URL with parameters
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gitagpt@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail compose in a new window
    window.open(gmailUrl, '_blank');
});
