
const menu = document.querySelector('#mobile-view');
const menulinks = document.querySelector('.list');


const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click',mobilemenu);