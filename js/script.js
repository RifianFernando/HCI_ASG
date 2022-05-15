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

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var radio4 = document.getElementById("radio4");
var radio5 = document.getElementById("radio5");
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let count = 1; 
if (count = 1){
    radio1.click();
}

var loop_click = setTimeout(mycode, 5000);
function mycode() {
    next.click();
    loop_click = setTimeout(mycode, 5000); // repeat gambar
}

function func(){
    radio1.click();
}


next.addEventListener('click', () => {
    count++;
    if(count >= 6){
        count = 1;
    }
    console.log(count);
    check();
});

radio1.addEventListener('click', () => {
    count = 1;
    check();
});

radio2.addEventListener('click', () => {
    count = 2;
    check();
});

radio3.addEventListener('click', () => {
    count = 3;
    check();
});

radio4.addEventListener('click', () => {
    count = 4;
    check();
});

radio5.addEventListener('click', () => {
    count = 5;
    check();
});

prev.addEventListener('click', () => {
    count--;
    if(count <= 0){
        count = 5;
    }
    console.log(count);
    check();
});

function check(){
    if(count == 1){
        img1.style.display = "block";
    }else{
        img1.style.display = "none";
    }

    if(count == 2){
        img2.style.display = "block";
    }else{
        img2.style.display = "none";
    }

    if(count == 3){
        img3.style.display = "block";
    }else{
        img3.style.display = "none";
    }

    if(count == 4){
        img4.style.display = "block";
    }else{
        img4.style.display = "none";
    }

    if(count == 5){
        img5.style.display = "block";
    }else{
        img5.style.display = "none";
    }


    if(count === 1){
        radio1.classList.add("enable");
    }
    else{
        radio1.classList.remove("enable");
    }

    if(count === 2){
        radio2.classList.add("enable");
    }
    else{
        radio2.classList.remove("enable");
    }

    if(count === 3){
        radio3.classList.add("enable");
    }
    else{
        radio3.classList.remove("enable");
    }

    if(count === 4){
        radio4.classList.add("enable");
    }
    else{
        radio4.classList.remove("enable");
    }
    if(count === 5){
        radio5.classList.add("enable");
    }else{
        radio5.classList.remove("enable");
    }
}
const join = async () => {
	const email = document.querySelector("#email").value;
    let valid = true;
    if(email.length == 0){
        alert("Email must be filled");
        return;
    }
    if(email.includes("@") == false){
        alert("Email must contain @");
        return
    }
    if(email.includes(".") == false){
        alert("Email must contain .");
        return
    }
    if(email.indexOf(" ") >= 0){
        alert("Email cannot contain spaces");
        return
    }
    if(valid == true){
        alert("We will send our latest news to your email");
    }
};