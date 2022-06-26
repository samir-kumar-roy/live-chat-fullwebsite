let imgLeft = document.querySelector(".img-left");
let standardVWidth = 1342;
const imgTop = -138;
let hamburgerIcon = document.querySelector(".fa-bars");
let hamburgerCloseIcon = document.querySelector(".fa-xmark");
let hamburgerNavWrapper = document.querySelector('.nav-wrapper');
hamburgerIcon.addEventListener("click", (e) => {
    hamburgerNavWrapper.style.display = "block";
    hamburgerCloseIcon.parentElement.style.display = "block"
    hamburgerIcon.parentElement.style.display = "none"

})

hamburgerCloseIcon.addEventListener("click", () => {
    hamburgerNavWrapper.style.display = "none";

    hamburgerCloseIcon.parentElement.style.display = "none"
    hamburgerIcon.parentElement.style.display = "block"


})

