// Return year
document.getElementById('year').innerHTML = new Date().getFullYear();

// Return date last modified
let modified = document.lastModified;
document.getElementById('sudo').innerHTML = modified;

// Referenced  https://contactmentor.com/build-website-visitor-counter-javascript/?expand_article=1
// let counterContainer = document.querySelector(".website-counter");
// let visitCount = localStorage.getItem("page_view");
// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem('page_view', visitCount);
// } else {
//     visitCount = 1;
//     localStorage.setItem('page_view', 1);
// }
// counterContainer.innerHTML = visitCount;