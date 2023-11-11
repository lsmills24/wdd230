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

// Currently working function with nested for loop inside forEach loop
const displayLinks = (weeks) => {
    const list = document.getElementById("list");
 
    weeks.forEach((week) => {
        let listItem = document.createElement('li');
        listItem.textContent = `Week ${week.lesson}: `;
        for (let i = 0; i < week.links.length; i++) {
            // console.log(week.links[i].title);
            // console.log(week.links[i].url);
            let alink = document.createElement('a');
            alink.setAttribute('href', week.links[i].url);
            alink.setAttribute('class', 'lesson');
            if (i == 0) {
                alink.text = week.links[i].title;
            } else {
                alink.textContent = ` | ${week.links[i].title}`;
            }
            listItem.appendChild(alink);
        }
        list.appendChild(listItem);
    });
}