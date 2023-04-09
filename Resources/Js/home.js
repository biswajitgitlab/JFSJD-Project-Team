// Define the images to be used in the slideshow
const images = ["Resources/Images/maddy-weiss-syyXII1iH7c-unsplash.jpg", "Resources/Images/maddy-weiss-syyXII1iH7c-unsplash.jpg", "Resources/Images/markus-spiske-iOL-0GJY-DM-unsplash.jpg"];

const slideshow = document.querySelector("#slideshow");
let activeImage = 0;

setInterval(() => {
  activeImage++;
  if (activeImage === images.length) {
    activeImage = 0;
  }
  slideshow.querySelector(".active").classList.remove("active");
  slideshow.querySelectorAll("img")[activeImage].classList.add("active");
}, 5000);