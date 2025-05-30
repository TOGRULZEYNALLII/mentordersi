const button = document.querySelector('#toggle');
const refreshButton = document.querySelector('#refresh');

refreshButton.addEventListener('click', () => {
  location.reload();
});
if(localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

button.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }
}
);
