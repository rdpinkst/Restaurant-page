import saladPic from './salad.jpg';

export default function renderPage() {
    const pageContent = document.querySelector('#content');

    const bodyDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');
    const imageDiv = document.createElement('div');

    bodyDiv.setAttribute('id', 'body');
    aboutDiv.setAttribute('id', 'description');
    imageDiv.setAttribute('id', 'saladImamge');

    const aboutRest = document.createElement('p');
    const salad = new Image();

    aboutRest.innerText = `Fresh new spot, for fresh green's.  Pinky's Salad Spot was founded in 2021 as a healthy option for todays fast good.  Come in today, and know you're doing the right thing for your health. `

    salad.src = saladPic;

    aboutDiv.appendChild(aboutRest);
    imageDiv.appendChild(salad);

    bodyDiv.appendChild(aboutDiv);
    bodyDiv.appendChild(imageDiv);

    pageContent.appendChild(bodyDiv);

}