import headerRender from './header.js';
import renderPage from './first_page.js';
import contactRender from './contact.js';
import menuRender from './menu.js';
import './style.css';

headerRender();
renderPage();

const pageContent = document.querySelector('#content');
const tabs = document.querySelectorAll('li');

function removeContent() {
    while (pageContent.childNodes.length > 3) {
        pageContent.removeChild(pageContent.lastChild);
    }
}

for (let tab of tabs) {
    tab.addEventListener('click', function (e) {
        if (e.currentTarget.textContent === 'Menu') {
            removeContent();
            menuRender();
        }
        else if (e.currentTarget.textContent === 'Home') {
            pageContent.style.backgroundImage = '';
            removeContent();
            renderPage();
        }
        else if (e.currentTarget.textContent === 'Contact') {
            pageContent.style.backgroundImage = '';
            removeContent();
            contactRender();
        }
    })
}





