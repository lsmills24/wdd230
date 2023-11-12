const baseURL = "https://lsmills24.github.io/wdd230/";
const membersURL = "https://lsmills24.github.io/wdd230/chamber/data/members.json"
const tiles = document.querySelector('#tiles');

async function getlinkdata() {
    const response = await fetch(membersURL);
    // const response = await fetch();
    const data = await response.json();
    console.log(data.members);

    displayMembers(data.members);
}

getlinkdata();

const displayMembers = (members) => {
    // card build will go here
    members.forEach((member) => {
        let tile = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let membership = document.createElement('p');
        let icon = document.createElement('img');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        link.textContent = `Website: ${member.name}`;
        link.setAttribute('href', member.website);
        membership.textContent = `Membership Level: ${member.membership}`;

        icon.setAttribute('src', member.image);
        icon.setAttribute('alt', `Business Icon for ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '340');
        // icon.setAttribute('height', '440');

        tile.appendChild(name);
        tile.appendChild(icon);
        tile.appendChild(address);
        tile.appendChild(phone);
        tile.appendChild(link);
        tile.appendChild(membership);

        tiles.appendChild(tile);
    });
}