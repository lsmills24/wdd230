const baseURL = "https://lsmills24.github.io/wdd230/";
const rentalsURL = "https://lsmills24.github.io/wdd230/finalproject/data/rentals.json";
const rows = document.querySelector('#tile-rows');

async function getlinkdata() {
    const response = await fetch(rentalsURL);
    const data = await response.json();
    console.log(data);

    displayRentals(data.rentals);
}

getlinkdata();

const displayRentals = (rentals) => {
    rentals.forEach(rental => {
        let row = document.createElement('tr');
        let imageCell = document.createElement('td')
        let icon = document.createElement('img');
        let type = document.createElement('td');
        let persons = document.createElement('td');
        let resHalf = document.createElement('td');
        let resFull = document.createElement('td');
        let walkHalf = document.createElement('td');
        let walkFull = document.createElement('td');

        type.textContent = `${rental.type}`;
        persons.textContent = `${rental.persons}`;
        resHalf.textContent = `${rental.reservation[0].half}`;
        resFull.textContent = `${rental.reservation[0].full}`;
        walkHalf.textContent = `${rental.walkin[0].half}`;
        walkFull.textContent = `${rental.walkin[0].full}`;

        icon.setAttribute('src', rental.image);
        icon.setAttribute('alt', `${rental.type}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100px');
        imageCell.setAttribute('class', 'v-image');
        imageCell.appendChild(icon);

        row.setAttribute('class', 'lighter');

        row.appendChild(icon);
        row.appendChild(type);
        row.appendChild(persons);
        row.appendChild(resHalf);
        row.appendChild(resFull);
        row.appendChild(walkHalf);
        row.appendChild(walkFull);

        rows.appendChild(row);
    });
}