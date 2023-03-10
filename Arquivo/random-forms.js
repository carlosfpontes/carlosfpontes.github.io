// Definir uma matriz com os IDs do formulário
const formIds = ['1FAIpQLScX8RyraGDfvutsGMX6dnztluJpDDKpUT-thlFnCpfpZtt7yg', '1FAIpQLSeQ6eaNz0u8gmBRfCWKWLt3fFGJ6kK6uRHnIE93-3RD5DKMAw', '1FAIpQLSdM25Atr2kd5MrtkOjQjqcR-clFF0y0lTyuGxwiKT1oP9-B0g', '1FAIpQLSfkh6_Ji-dKMko0lshR1mseSxO5xsIAuiJrk8WS9L9NakwkDw', '1FAIpQLSfiA8UeZiBdOYm5flV2fNrb2Sg_xuJmjOlhQJ8oLTyEoP4Ukw', '1FAIpQLSflt4zqpa4oC4kGj3yOyzNebwf22WROYhtFpPmhX-u90zJaww', '1FAIpQLScn2WyMn5mZaZB7YIbbv9LDs_Q-Y66XndMS36OONB68VuWP6w', '1FAIpQLSePnQ4aDxy07OB1BaeDnfjD5UmFOLoN-wQXLRnepA9w6LcWdw', '1FAIpQLScMLg9KGe6mDbKN2VJ0X-r7JPglQRqcfGG0Za5ukMuh8xxX6w'];

// Embaralhar a matriz para obter uma ordem aleatória
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Obter o elemento container e embaralhar a matriz
const container = document.querySelector('.container');
const shuffledIds = shuffleArray(formIds);

// Percorrer a matriz embaralhada e exibir cada formulário
let currentIndex = 0;
function showForm() {
  // Se todos os formulários foram exibidos, mostrar a mensagem de agradecimento e redefinir o índice
  if (currentIndex >= shuffledIds.length) {
    container.innerHTML = '<h2><center>Obrigado por participar da pesquisa!</center></h2><button onclick="location.reload()">Retornar ao início</button>';
    return;
  }
  
  // Caso contrário, exibir o próximo formulário
  const formId = shuffledIds[currentIndex];
  container.innerHTML = `
    <h2><center>Questionário ${currentIndex + 1}</center></h2>
    <iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true" width="100%" height="2900" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
    <button onclick="showForm(); window.scrollTo(0,0)">Próximo questionário</button>
  `;
  
  // Rolar até o topo da página
  window.scrollTo(0,0);

  // Increment index
  currentIndex++;
}

// Mostrar o primeiro formulário
showForm();
