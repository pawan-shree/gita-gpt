const logo = document.getElementById("logo");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const devs = document.getElementById("devs");
const angry = document.getElementById("angry");
const happy = document.getElementById("happy");
const lonely = document.getElementById("lonely");
const demotivation = document.getElementById("demotivation");
const depression = document.getElementById("depression");
const lust = document.getElementById("lust");
const chat = document.getElementById("chat");

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

angry.addEventListener('click', () => {
    location.href = 'angry.html';
});

// happy.addEventListener('click', () => {
//     location.href = 'happy.html';
// });

lonely.addEventListener('click', () => {
    location.href = 'lonely.html';
});

demotivation.addEventListener('click', () => {
    location.href = 'demotivation.html';
});

depression.addEventListener('click', () => {
    location.href = 'depression.html';
});

lust.addEventListener('click', () => {
    location.href = 'lust.html';
});

chat.addEventListener('click', () => {
    location.href = 'https://gita-gpt-chat.vercel.app/';
});
