// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');
// coverImage.src = './assets/bluebrocade.jpg';


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i]
}

title.innerText = getRandomIndex(titles);
tagline1.innerText = getRandomIndex(descriptors);
tagline2.innerText = getRandomIndex(descriptors);
  if (tagline1 === tagline2) {
  tagline2.innerText = getRandomIndex(descriptors);
  };
  //come back to this if statement
coverImage.src = getRandomIndex(covers)
