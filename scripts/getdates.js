// Return year
document.getElementById('year').innerHTML = new Date().getFullYear();

// Return date last modified
let modified = document.lastModified;
document.getElementById('sudo').innerHTML = modified;