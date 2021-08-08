import saladFixings from './salad_fixings.jpg';

export default function menuRender() {
    const pageContent = document.querySelector('#content');

    const menuContainer = document.createElement('div');
    const backGround = document.createElement('div');

    menuContainer.setAttribute('id', 'menu');
    backGround.setAttribute('id', 'menuBackground');

    const bestSaladDiv = document.createElement('div');
    const beetSaladDiv = document.createElement('div');
    const santafeDiv = document.createElement('div');
    const veganCobbDiv = document.createElement('div');
    const spinachSaladDiv = document.createElement('div');
    const spicyWrapDiv = document.createElement('div');


    const bestSaladTitle = document.createElement('h4');
    const beetSaladTitle = document.createElement('h4');
    const santafeTitle = document.createElement('h4');
    const veganCobbTitle = document.createElement('h4');
    const spinachSaladTitle = document.createElement('h4');
    const spicyWrapTitle = document.createElement('h4');
    const bestSalad = document.createElement('p');
    const beetSalad = document.createElement('p');
    const santafeSalad = document.createElement('p');
    const veganCobb = document.createElement('p');
    const spinachSalad = document.createElement('p');
    const spicyWrap = document.createElement('p');

    bestSaladTitle.innerText = 'Best Salad';
    beetSaladTitle.innerText = 'Bet You Want Beets';
    santafeTitle.innerText = 'Santa Fe Southwestern Salad';
    veganCobbTitle.innerText = 'Baconless Cobb Salad';
    spinachSaladTitle.innerText = 'Super Spinach Salad';
    spicyWrapTitle.innerText = 'Spicy Quinoa and Red Lentil Wrap';
    bestSalad.innerText = 'Fresh arugula, strawberries, sliced almonds, goat cheese, red peppers, with a strawberry vinegarette\n$9.50';
    beetSalad.innerText = 'Fresh roasted beets, spinach, goat cheese, roasted almonds, with a lemon vinegarette \n$10.00';
    santafeSalad.innerText = 'Fresh spinach, southwestern seasoned black beans, avocado, red pepper, with a southwestern ranch \n$9.50'
    veganCobb.innerText = 'Romaine, house made coconut bacon, roasted chickpeas, corn, tomatoes, radishes, avocado, red onion, with a vegan ranch dressing\n$10.50';
    spinachSalad.innerText = 'Spinach, quinoa, shredded carrots, edaname, chickpeas, dried cranberry, pepitas, cherry tomatoes, with a carrot miso ginger dressing\n$10.50';
    spicyWrap.innerText = 'Seasoned red lentils and quinoa, green cabbage, with a spicy tahini sauce\n$9.00';


    bestSalad.setAttribute('class', 'salad');
    beetSalad.setAttribute('class', 'salad');
    santafeSalad.setAttribute('class', 'salad');
    veganCobb.setAttribute('class', 'salad');
    spinachSalad.setAttribute('class', 'salad');
    spicyWrap.setAttribute('class', 'salad');

    const image = new Image();
    image.src = saladFixings;
    // image.classList.add('image');

    backGround.appendChild(image);
    bestSaladDiv.appendChild(bestSaladTitle);
    bestSaladDiv.appendChild(bestSalad);
    beetSaladDiv.appendChild(beetSaladTitle);
    beetSaladDiv.appendChild(beetSalad);
    santafeDiv.appendChild(santafeTitle);
    santafeDiv.appendChild(santafeSalad);
    veganCobbDiv.appendChild(veganCobbTitle);
    veganCobbDiv.appendChild(veganCobb);
    spinachSaladDiv.appendChild(spinachSaladTitle);
    spinachSaladDiv.appendChild(spinachSalad);
    spicyWrapDiv.appendChild(spicyWrapTitle);
    spicyWrapDiv.appendChild(spicyWrap);

    menuContainer.appendChild(bestSaladDiv);
    menuContainer.appendChild(beetSaladDiv);
    menuContainer.appendChild(santafeDiv);
    menuContainer.appendChild(veganCobbDiv);
    menuContainer.appendChild(spinachSaladDiv);
    menuContainer.appendChild(spicyWrapDiv);


    pageContent.appendChild(backGround);
    pageContent.appendChild(menuContainer);


}
