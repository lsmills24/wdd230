const baseURL = "https://lsmills24.github.io/wdd230/";
const membersURL = "https://lsmills24.github.io/wdd230/chamber/data/members.json"

async function getlinkdata() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);

    // displayLinks(data.members);
}

// getlinkdata();
