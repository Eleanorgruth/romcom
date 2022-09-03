// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var coverImage = document.querySelector('.cover-image');

var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');


var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedCoverSection = document.querySelector('.saved-covers-section')

var coverImageInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');

var makeMyBookButton = document.querySelector('.create-new-book-button');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
//this will be an array of new Cover instances
];

var currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomize);

window.addEventListener('load', randomize);

makeOwnCoverButton.addEventListener('click', showForm);

viewSavedButton.addEventListener('click', showSavedView);

homeButton.addEventListener('click', showHomeView);

makeMyBookButton.addEventListener('click', saveUserInput);

saveCoverButton.addEventListener('click', saveCurrentCover);



// Create your event handlers and other functions here 👇
function randomize() {
  title.innerText = getRandomIndex(titles);
  tagline1.innerText = getRandomIndex(descriptors);
  tagline2.innerText = getRandomIndex(descriptors);
    if (tagline1 === tagline2) {
      tagline2.innerText = getRandomIndex(descriptors);
    };
  coverImage.src = getRandomIndex(covers);
  currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);
};

function showForm() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function showSavedView() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedCoverSection.innerHTML = savedCovers
};

function showHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
};

function saveUserInput() {
  event.preventDefault()
  covers.push(coverImageInput.value);
  titles.push(titleInput.value);
  descriptors.push(tagline1Input.value, tagline2Input.value);
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  coverImage.src = coverImageInput.value;
  title.innerText = titleInput.value;
  tagline1.innerText = tagline1Input.value;
  tagline2.innerText = tagline2Input.value;
  currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);
};

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover))
  savedCovers.push(currentCover);
}
// We've provided one function to get you started
function getRandomIndex(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i]
};


//   var randomTagline1 = getRandomIndex(descriptors);
//   tagline1.innerText = randomTagline1;
//
//   var randomTagline2 = getRandomIndex(descriptors);
//   tagline2.innerText = randomTagline2;
//     if (tagline1 === tagline2) {
//       randomTagline2 = getRandomIndex(descriptors);
//       tagline2.innerText = randomTagline2;
//     };
//     //come back to this if statement
//   var randomImage = getRandomIndex(covers);
//   coverImage.src = randomImage;
// }

// randomize();
