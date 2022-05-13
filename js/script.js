
var input = document.getElementById("input");
var search = document.getElementById("search-line");
input.addEventListener('focus', (event) => {
    console.log("focus");
    search.classList.remove("search-bar");
    search.classList.add("active-search");
    console.log(search);
});

input.addEventListener('blur', (event) => {
    console.log("focus");
    search.classList.add("search-bar");
    search.classList.remove("active-search");
    console.log(search);
});
