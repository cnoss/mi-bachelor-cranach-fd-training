"use strict";

/*
var node = document.getElementsByTagName("body")[0];
node.innerHTML = '';
for (i = 0; i < 360; i = i + 10){
  for (s = 0; s < 100; s = s + 5) {
    var rainbow = document.createElement("div");

    rainbow.classList.add("blockLeni");
    rainbow.style = "background-color:hsl(" + i + ","+s+"%,50%)";
    node.appendChild(rainbow);
  }
}
*/
// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  myFunction();
}; // Get the navbar


var navbar = document.querySelector(".navigation"); // Get the offset position of the navbar

var sticky = navbar.offsetTop; // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//# sourceMappingURL=site.js.map
