// Definir uma matriz com os IDs do formulário
const formIds = ['1FAIpQLScX8RyraGDfvutsGMX6dnztluJpDDKpUT-thlFnCpfpZtt7yg', '1FAIpQLSeWSfFWhoEuq_FygF2l2lKWGPMi3SNNIbEXmkUCZ55NWvbVfQ', '1FAIpQLSeh_W16jQMe4NOmVqHfzmfSpLeDB5RtqCuGGJ_gLe5LbadhQQ', '1FAIpQLSf0JXhtCvH-pYRXcgjqH0ALcwt5e3FirjTj0kx-twjt7FDxhQ', '1FAIpQLScsNwM7N6UpTof8Ta-uOXsoeCKfEbKAYk6kNy-Rf5Jfw-LGVQ', '1FAIpQLSeZ7XRNxU2nJg7fvM3FfElGeaV6cXBsCXyGIaDEs8LEkToG2Q', '1FAIpQLSfH0-eQXTJutk3oOyNzFhQEBOPx8NnCEvA8NEOegTLqfEbI6w', '1FAIpQLSfLHgpS2BUcFGaqnS6qBMvaFgbD0PH6ydAekVgJGO1Zs7P0Xw', '1FAIpQLSf2qqQxXes5jb1jmNtTpbtBc0FsW-boRwsDeDgFsQ-sSLMTNQ'];

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
    <iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true" width="100%" height="4500" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
    <button onclick="showForm(); window.scrollTo(0,0)">Próximo questionário</button>
  `;

  // Rolar até o topo da página
  window.scrollTo(0,0);

  // Increment index
  currentIndex++;
}


// Definir a função para iniciar a pesquisa
function startSurvey() {
  // Obter as divs "start" e "container"
  const startDiv = document.querySelector('.start');
  const containerDiv = document.querySelector('.container');

  // Exibir a div "start" e ocultar a div "container"
  startDiv.style.display = 'block';
  containerDiv.style.display = 'none';

  // Definir o botão de iniciar para chamar a função "showForm()"
  const startButton = document.querySelector('.start button');
  startButton.onclick = function() {
    showForm();
    startDiv.style.display = 'none';
    containerDiv.style.display = 'block';
  };
}

container.querySelector('.next-form-button').style.display = 'block';

