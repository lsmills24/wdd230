// Return year
document.getElementById('year').innerHTML = new Date().getFullYear();

// Return date last modified
let modified = document.lastModified;
document.getElementById('sudo').innerHTML = modified;

// HamButton 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
navigation.classList.toggle('open');
hamButton.classList.toggle('open');
});


//**************************** Meeting Banner ********************************/
// Only display on Monday-Wednesday (1-3)
document.addEventListener("DOMContentLoaded", function() {
    const day = new Date().getDay();
    const banner = document.querySelector('#reminder-banner');
    // console.log(day);

    // Sun(0), Mon(1), Tues(2), Wed(3), Thurs(4), Fri(5), Sat(6)
    if ((day >= 1) && (day <= 3)) {
        banner.style.display = 'block'; // Show banner
    } else {
        banner.style.display = 'none'; // Hide banner
    }
});

function closeBanner() {
    // Hide the banner when the close button is clicked
    var banner = document.querySelector('#reminder-banner');
    banner.style.display = 'none';
}


//********************* Display Visit Messages ************************************** */
const message = document.querySelector('.msg');  // references msg in discover.html to access message
const msToDays = 84600000;
// const todayElement = document.querySelector("#today");
const today = new Date();

//localStorage
let visitDate = new Date(window.localStorage.getItem('dateVisited-1s'));
let daysSinceVisit = (today - visitDate) / msToDays;
daysSinceVisit = daysSinceVisit.toFixed(0);  //rounds the milliseconds to whole number

console.log(daysSinceVisit)

if (visitDate.getFullYear() < 1970) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceVisit < 1) {
    message.textContent = "Back so soon? Awesome!";
} else {
    if (daysSinceVisit == 1) {
        message.textContent = "You visited this site ${daysSinceVisit} day ago.";
    }
    if (daysSinceVisit > 1) {
        message.textContent = "You visited this site ${daysSinceVisit} days ago.";
    }
}
// Store new visit total into localStorage (key=numVisits-1s)
localStorage.setItem("dateVisited-1s", today);


//************************ JOIN FORM TIMESTAMP *******************************/
// Function to generate a current timestamp in ISO format ("2023-11-04T12:34:56")
function getTimestamp() {
    const now = new Date();
    return now.toISOString();
};

// Event listener to populate the timestamp input field when the form is submitted
document.getElementById("joinForm").addEventListener("submit", function(event) {
    const timestamp = document.getElementById("timeStamp");
    timestamp.value = getTimestamp();
});