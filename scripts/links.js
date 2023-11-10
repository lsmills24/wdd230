const baseURL = "https://lsmills24.github.io/wdd230/";
const linksURL = "https://lsmills24.github.io/wdd230/data/links.json"

const cards = document.querySelector('#cards');


async function getlinkdata() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    displayLinks(data.lessons);
}

getlinkdata();

// Not working - Ignore but don't delete yet! **************************************
const displayLinks_____ = (weeks) => {  
    weeks.forEach((week) => {
        let section = document.createElement('h4');
        let link = document.createElement('a')
        let list = document.createElement('li');
        let title = document.createElement('p');

        section.textContent = `${week.lesson}`;
        link.textContent = `${week.links.url}`;
        // list.setAttribute('href', week.links.url);
        // list.setAttribute('class', 'lesson');
        // list.textContent = title;
        section.appendChild(link);
        section.appendChild(title);

        cards.appendChild(section);
    });
}

// Attempting this one ************************************************************
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let card = document.createElement('li');
        let link = document.createElement('a');
        let assignmentName = document.createElement('p');

        // ******** Try Nested forEach function for each assignment in each lesson ********* //
        card.textContent = `Week ${week.lesson}: `;

        link.setAttribute('class', 'lesson');
        link.setAttribute('href', week.links.url);
        link.textContent = `${week.links.title} |`;

        card.appendChild(link);
        // card.appendChild();

        cards.appendChild(card);
    });
}