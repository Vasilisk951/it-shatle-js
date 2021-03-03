const linkOne = document.querySelector('.nav-link:nth-child(1)');
const content = document.querySelector('.content');

linkOne.classList.add('nav-link__active');
content.append(navigator.userAgent);