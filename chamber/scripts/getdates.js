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


// Dark Mode Slider
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("◾")) {
        document.body.style.background = "#000";
        main.style.background = "#000";
		main.style.color = "#fff";
        // add rest of style changes here for dark mode
		modeButton.textContent = "🔲";
	} else {
        document.body.style.background = "#F2FAFF";
		main.style.background = "#F2FAFF";
		main.style.color = "#000";
        // add rest of style changes here for dark mode
		modeButton.textContent = "◾";
	}
});
