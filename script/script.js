const header = document.querySelector(".navbar")
const navbarToggle = document.querySelector(".navbar-toggler");

navbarToggle.addEventListener("click", function() {
    if (window.scrollY < 100) {
        header.classList.toggle("navbarLight");
    }
});
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}