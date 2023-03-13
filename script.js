  // Capturar parâmetros do URL
  const urlParams = new URLSearchParams(window.location.search);
  const age = urlParams.get('age');
  const education = urlParams.get('education');
  const gender = urlParams.get('gender');
  const profession = urlParams.get('profession');
  const city = urlParams.get('city');


  // Adicionar os valores capturados ao URL do Google Form
  const url = "?usp=pp_url" +
    `&entry.345274283=${encodeURIComponent(age)}` +
    `&entry.1827468255=${encodeURIComponent(education)}` +
    `&entry.362303029=${encodeURIComponent(gender)}` +
    `&entry.1153728842=${encodeURIComponent(profession)}` +
    `&entry.1838739207=${encodeURIComponent(city)}`;




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
    container.innerHTML = '<h2><center>Obrigado por participar da pesquisa!</center></h2><button onclick="window.location.href = \'https://carlosfpontes.github.io/\';">Retornar ao início</button>';
    return;
  }
  
  // Caso contrário, exibir o próximo formulário
  const formId = shuffledIds[currentIndex];
  container.innerHTML = `
    <h2><center>Questionário ${currentIndex + 1}</center></h2>
    <iframe src="https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true${url}" width="100%" height="3700" frameborder="0" marginheight="0" marginwidth="0">Carregando...</iframe>
    <button onclick="showForm(); window.scrollTo(0,0)">Próximo questionário</button>
  `;
  
  // Rolar até o topo da página
  window.scrollTo(0,0);

  // Increment index
  currentIndex++;
}

// Mostrar o primeiro formulário
showForm();