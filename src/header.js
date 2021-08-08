export default function headerRender() {
    const pageContent = document.querySelector('#content');

    const title = document.createElement('div');
    const navBar = document.createElement('div');

    title.setAttribute('class', 'title');
    navBar.setAttribute('class', 'header');

    const websiteTabs = document.createElement('ul');
    const restaurant = document.createElement('h1');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const infoTab = document.createElement('li');

    homeTab.innerText = 'Home';
    menuTab.innerText = 'Menu';
    infoTab.innerText = 'Contact';
    restaurant.innerText = `Pinky's Salad Spot`;

    websiteTabs.appendChild(homeTab);
    websiteTabs.appendChild(menuTab);
    websiteTabs.appendChild(infoTab);

    title.appendChild(restaurant);
    navBar.appendChild(websiteTabs);

    pageContent.appendChild(title);
    pageContent.appendChild(navBar);
}
