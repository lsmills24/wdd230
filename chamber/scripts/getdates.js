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

//*************** Display number of page visits ************************************** */
// Create the display variable
// const visitsDisplay = document.querySelector(".visits");
// Get stored value in localstorage, if missing then assign 0 to it
// let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;
// determine if this is the first visit or not
// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits;
// } else {
//     visitsDisplay.textContent = 'This is your first visit. 👋 Welcome!';
// }
// increase # of visits by one 
// numVisits++;
// Store new visit # into local storage key=numVisits-1s
// localStorage.setItem("numVisits-1s", numVisits);


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
