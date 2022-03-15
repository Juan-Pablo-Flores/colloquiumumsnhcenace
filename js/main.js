window.onscroll = function() {myFunction()};

var header = document.getElementById("navigation");
var paddingElement = document.getElementById("programa");
var sticky = header.offsetTop;

function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    paddingElement.classList.add("u-padding-top-nav");
  } else {
    header.classList.remove("sticky");
    paddingElement.classList.remove("u-padding-top-nav");
  }
}