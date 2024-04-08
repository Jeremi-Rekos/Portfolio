var header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

var menu = document.getElementById("slideMenu");
var enter = document.getElementById("menuButt");
var exit = document.getElementById("exitButt");
var hambutt = document.querySelectorAll('.test');

function slideDown() {
  menu.classList.add("animation1");
  menu.classList.remove("animation2");
  menu.style.top = "0%";
}
function slideUp() {
  menu.classList.add("animation2");
  menu.classList.remove("animation1");
  menu.style.top = "-100%";
}
hambutt.forEach(function(single) {
    single.addEventListener('click', slideUp);
});

enter.addEventListener("click", slideDown);
exit.addEventListener("click", slideUp);


function openLightbox(n) {
  var lightbox = document.getElementById("lightbox");
  var img = document.getElementById("lightbox-img");
  if (n === 1) {
    img.src = document.getElementById("img1").src;
  } else if (n === 2) {
    img.src = document.getElementById("img2").src;
  }
  lightbox.style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function flipCard(cardId) {
  var card = document.getElementById(cardId);
  card.classList.toggle("flipped");
}
