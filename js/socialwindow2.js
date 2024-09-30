const container = document.querySelector('.container');
const connectbtn = document.querySelector('.connect-btn');
const crossbtn = document.querySelector('.cross-btn');
const socialcontainer = document.querySelector('.social-container');

connectbtn.addEventListener('click', () => {
    socialcontainer.classList.toggle('visible')
});

crossbtn.addEventListener('click', () => {
    socialcontainer.classList.remove('visible')
});

// Optional: Close the social container if user clicks outside of it
document.addEventListener('click', (event) => {
    if (!container.contains(event.target) && !socialcontainer.contains(event.target) && socialcontainer.classList.contains('visible')) {
        socialcontainer.classList.remove('visible')
    }
});