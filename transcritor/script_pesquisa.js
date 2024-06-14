// Função de rolar a página até o topo
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Obtém todos os formulários pela ID em ordem crescente
var forms = [
  document.getElementById('form1'),
  document.getElementById('form2'),
  document.getElementById('form3'),
  document.getElementById('form4'),
  document.getElementById('form5'),
  document.getElementById('form6'),
  document.getElementById('form7'),
  document.getElementById('form8'),
  document.getElementById('form9')
];

// Define uma variável para acompanhar o formulário atual
var currentForm = 0;

// Exibe o próximo formulário
function showNextForm() {
  // Esconde o formulário atual
  forms[currentForm].style.display = 'none';

  // Incrementa o índice do formulário atual e verifica se todos foram exibidos
  currentForm++;
  if (currentForm === forms.length) {
    // Exibe a mensagem de agradecimento e o botão de retorno
    document.getElementById('mensagem').style.display = 'block';
    scrollToTop(); // Rolar a página para o topo
    return;
  }

  // Atualiza o contador de formulários exibidos
  var contador = document.getElementById('contador');
  contador.innerHTML = 'QUESTIONÁRIO ' + (currentForm + 1) + '/' + forms.length;

  // Exibe o próximo formulário
  forms[currentForm].style.display = 'block';
  scrollToTop(); // Rolar a página para o topo
}

// Esconde todos os formulários, exceto o primeiro
forms.forEach(function(form, index) {
  if (index === 0) {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

// Adiciona um ouvinte de eventos para cada botão de envio
forms.forEach(function(form) {
  form.addEventListener('submit', function() {
    // Define o atributo target do formulário para _blank
    form.setAttribute('target', '_blank');

    // Exibe o próximo formulário
    showNextForm();

    scrollToTop(); // Rolar a página para o topo
  });
});

// Esconde a mensagem de agradecimento e o botão de retorno inicialmente
document.getElementById('mensagem').style.display = 'none';

// Adiciona um ouvinte de eventos para o botão de retorno
document.getElementById('botao-retorno').addEventListener('click', function() {
  // Redireciona para a página inicial
  window.location.href = 'index.html';
});

// Adiciona um elemento HTML para exibir o contador de formulários
var contador = document.createElement('p');
contador.id = 'contador';
contador.innerHTML = 'QUESTIONÁRIO 1/' + forms.length;
document.body.insertBefore(contador, forms[0]);
