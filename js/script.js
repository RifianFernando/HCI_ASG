//search color
var input = document.getElementById("input");
var search = document.getElementById("search-line");
input.addEventListener('focus', (event) => {
    //console.log("focus");
    search.classList.remove("search-bar");
    search.classList.add("active-search");
    //console.log(search);
});

input.addEventListener('blur', (event) => {
    //console.log("focus");
    search.classList.add("search-bar");
    search.classList.remove("active-search");
    //console.log(search);
});

//carousel
const carousel = document.getElementsByClassName(".carousel-body");
const img = document.querySelectorAll('.slide');
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let count = 1; 
const SIZE = img[0].clientWidth;

console.log(carousel.classList);
carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';

var loop_click = setTimeout(mycode, 5000);
function mycode() {
    next.click();
  loop_click = setTimeout(mycode, 5000); // repeat gambar
}


next.addEventListener('click', () => {
    if(count >= img.length - 1) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    count++;
    carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
});

prev.addEventListener('click', () => { 
    if(count <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    count--;
    carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
});


carousel.addEventListener('transitionend', () => {
    console.log(count);
    if(img[count].id === 'lastSlide'){
        carousel.style.transition = "none";
        count = img.length - 2;
        carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
    }

    if(img[count].id === 'firstSlide'){
        carousel.style.transition = "none";
        count = img.length - count;
        console.log(count);
        carousel.style.transform = 'translateX(' + (-SIZE * count) + 'px)';
    }
});