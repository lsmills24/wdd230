const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


async function getprophetdata() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); //temp test of data retrieval
    displayprophets(data.prophets); //references the prophets array of JSON, not just the object
}

getprophetdata();

const displayprophets = (prophets) => {
    // card build will go here
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}