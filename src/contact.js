import mapPic from './map.jpg';

export default function contactRender() {
    const pageContent = document.querySelector('#content');

    const mapDiv = document.createElement('div');
    const locationDiv = document.createElement('div');
    const hoursDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');

    mapDiv.setAttribute('id', 'map');
    // locationDiv.setAttribute('id', 'location');
    // hoursDiv.setAttribute('id', 'hours');
    // contactDiv.setAttribute('id', 'contact');
    bottomDiv.setAttribute('id', 'bottom');

    const locationTitle = document.createElement('h3');
    const hoursTitle = document.createElement('h3');
    const contactTitle = document.createElement('h3');

    const map = new Image();
    map.src = mapPic;

    const location = document.createElement('p');
    const hours = document.createElement('p');
    const contact = document.createElement('p');

    locationTitle.innerText = 'Location';
    hoursTitle.innerText = 'Hours';
    contactTitle.innerText = 'Contact Us'

    location.innerText = '5555 W 55th Street\n Somewhere, CO 55555'
    hours.innerText = 'Monday thru Saturday: 11am - 9pm\n Sunday: 11am - 8pm';
    contact.innerText = '555-555-5555\n notRealEmail@jsAwesome.com'

    mapDiv.appendChild(map);
    locationDiv.appendChild(locationTitle);
    hoursDiv.appendChild(hoursTitle);
    contactDiv.appendChild(contactTitle);

    locationDiv.appendChild(location);
    hoursDiv.appendChild(hours);
    contactDiv.appendChild(contact);

    bottomDiv.appendChild(locationDiv);
    bottomDiv.appendChild(hoursDiv);
    bottomDiv.appendChild(contactDiv);

    pageContent.appendChild(mapDiv);
    pageContent.appendChild(bottomDiv);

}