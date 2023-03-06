// Define an array with the form IDs
const formIds = ['1FAIpQLScX8RyraGDfvutsGMX6dnztluJpDDKpUT-thlFnCpfpZtt7yg', '1FAIpQLSeQ6eaNz0u8gmBRfCWKWLt3fFGJ6kK6uRHnIE93-3RD5DKMAw', '1FAIpQLSdM25Atr2kd5MrtkOjQjqcR-clFF0y0lTyuGxwiKT1oP9-B0g', '1FAIpQLSfkh6_Ji-dKMko0lshR1mseSxO5xsIAuiJrk8WS9L9NakwkDw', '1FAIpQLSfiA8UeZiBdOYm5flV2fNrb2Sg_xuJmjOlhQJ8oLTyEoP4Ukw', '1FAIpQLSflt4zqpa4oC4kGj3yOyzNebwf22WROYhtFpPmhX-u90zJaww', '1FAIpQLScn2WyMn5mZaZB7YIbbv9LDs_Q-Y66XndMS36OONB68VuWP6w', '1FAIpQLSePnQ4aDxy07OB1BaeDnfjD5UmFOLoN-wQXLRnepA9w6LcWdw', '1FAIpQLScMLg9KGe6mDbKN2VJ0X-r7JPglQRqcfGG0Za5ukMuh8xxX6w'];

// Shuffle the array to get a random order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get the container element and shuffle the array
const container = document.querySelector('.container');
const shuffledIds = shuffleArray(formIds);

// Loop through the shuffled array and display each form
let currentIndex = 0;
function showForm() {
  // If all forms have been displayed, show thank you message and reset index
  if (currentIndex >= shuffledIds.length) {
    container.innerHTML = '<h2><center>Obrigado pela contribuição!</center></h2><button onclick="location.reload()">Retornar à pagina inicial</button>';
    return;
  }
  
  // Otherwise, display the next form
  const formId = shuffledIds[currentIndex];
  container.innerHTML = `
    <h2><center>Questionário ${currentIndex + 1}</center></h2>
    <iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
    <button onclick="showForm()">Próximo ambiente virtual</button>
  `;
  
  // Increment index
  currentIndex++;
}

// Show the first form
showForm();
