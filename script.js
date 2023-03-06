const forms = [
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...',
  'https://docs.google.com/forms/d/e/...'
];

const startButton = document.getElementById('start-quiz');
const quizForm = document.getElementById('quiz-form');

startButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * forms.length);
  const randomForm = forms[randomIndex];
  quizForm.innerHTML = `<iframe src="${randomForm}" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
  quizForm.style.display = 'block';
  startButton.style.display = 'none';
});
