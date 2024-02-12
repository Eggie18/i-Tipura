const readmorebtn=document.querySelector('.readmorebtn');
const text=document.querySelector('.text');

readmorebtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
});