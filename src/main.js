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
var makeMyBookButton = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var savedCoverSection = document.querySelector('.saved-covers-section');

var coverImageInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var tagline1Input = document.querySelector('.user-desc1');
var tagline2Input = document.querySelector('.user-desc2');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
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
savedCoverSection.addEventListener('dblclick', deleteMiniCover);
// Create your event handlers and other functions here 👇
function randomize() {
  var randomImage = getRandomIndex(covers);
  var randomTitle = getRandomIndex(titles);
  var randomTagline1 = getRandomIndex(descriptors);
  var randomTagline2 = getRandomIndex(descriptors);
  assignContent(randomImage, randomTitle, randomTagline1, randomTagline2);
};

function assignContent(imageParam, titleParam, tagline1Param, tagline2Param) {
  coverImage.src = imageParam;
  title.innerText = titleParam;
  tagline1.innerText = tagline1Param;
  tagline2.innerText = tagline2Param;
  currentCover = new Cover(coverImage.src, title.innerText, tagline1.innerText, tagline2.innerText);
};

function hideHomeView() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function showForm() {
  formView.classList.remove('hidden');
  savedView.classList.add('hidden');
  hideHomeView();
};

function showSavedView() {
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  hideHomeView();
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
  showHomeView();
  assignContent(coverImageInput.value, titleInput.value, tagline1Input.value, tagline2Input.value);
  coverImageInput.value = "";
  titleInput.value = "";
  tagline1Input.value = "";
  tagline2Input.value = "";
};

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
  savedCoverSection.innerHTML +=
  `<div class="mini-cover">
    <img class="mini-cover" src=${currentCover.cover}>
    <h2 class="cover-title">${currentCover.title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
  </div>`
  };
};

function deleteMiniCover(clickLocation) {
    var miniCover = clickLocation.target.closest("section > div");
    miniCover.remove();
};

// We've provided one function to get you started
function getRandomIndex(array) {
  var i = Math.floor(Math.random() * array.length);
  return array[i];
};
