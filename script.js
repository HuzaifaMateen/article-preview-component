let shared = document.querySelector(".share");

let btn = document.querySelector(".btn");

let triangle = document.querySelector(".triangle");

btn.addEventListener("click", function(){
    shared.classList.toggle("active");
    triangle.classList.toggle("tri");
    btn.classList.toggle("btn-active");
});