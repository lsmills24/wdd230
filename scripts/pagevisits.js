// Create the display variable
const visitsDisplay = document.querySelector(".visits");

// Get stored value in localstorage, if missing then assign 0 to it
let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;

// determine if this is the first visit or not
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit. 👋 Welcome!';
}

// increase # of visits by one 
numVisits++;

// Store new visit # into local storage key=numVisits-1s
localStorage.setItem("numVisits-1s", numVisits);