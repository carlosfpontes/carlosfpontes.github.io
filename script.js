// Array containing the IDs of the Google Forms
const formIds = [
  "1FAIpQLScX8RyraGDfvutsGMX6dnztluJpDDKpUT-thlFnCpfpZtt7yg",
  "1FAIpQLSeQ6eaNz0u8gmBRfCWKWLt3fFGJ6kK6uRHnIE93-3RD5DKMAw",
  "1FAIpQLSdM25Atr2kd5MrtkOjQjqcR-clFF0y0lTyuGxwiKT1oP9-B0g",
  "1FAIpQLSfkh6_Ji-dKMko0lshR1mseSxO5xsIAuiJrk8WS9L9NakwkDw",
  "1FAIpQLSfiA8UeZiBdOYm5flV2fNrb2Sg_xuJmjOlhQJ8oLTyEoP4Ukw",
  "1FAIpQLSflt4zqpa4oC4kGj3yOyzNebwf22WROYhtFpPmhX-u90zJaww",
  "1FAIpQLScn2WyMn5mZaZB7YIbbv9LDs_Q-Y66XndMS36OONB68VuWP6w",
  "1FAIpQLSePnQ4aDxy07OB1BaeDnfjD5UmFOLoN-wQXLRnepA9w6LcWdw",
  "1FAIpQLScMLg9KGe6mDbKN2VJ0X-r7JPglQRqcfGG0Za5ukMuh8xxX6w"
];

// Shuffle the form IDs randomly
const shuffledFormIds = shuffle(formIds);

// Index of the current form being displayed
let currentFormIndex = 0;

// Load the first form
loadForm(shuffledFormIds[currentFormIndex]);

// Add event listener to the next button
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  // If there are more forms to display
  if (currentFormIndex < shuffledFormIds.length - 1) {
    // Increment the current form index
    currentFormIndex++;
    // Load the next form
    loadForm(shuffledFormIds[currentFormIndex]);
  } else {
    // Otherwise, hide the next button
    nextBtn.style.display = "none";
  }
});

// Function to load a Google Form into the form container
function loadForm(formId) {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
}

// Function to shuffle an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
