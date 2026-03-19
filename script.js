const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}window.addEventListener("scroll", function(){

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

let position = card.getBoundingClientRect().top
let screen = window.innerHeight

if(position < screen - 100){

card.style.opacity = "1"
card.style.transform = "translateY(0)"

}

})

})
