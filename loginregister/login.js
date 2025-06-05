const form = document.getElementById('auth-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    message.textContent = "Login successful!";
    message.style.color="green";
    message.style.fontSize="20px";
  } else {
    message.textContent = "Invalid username or password.";
  }
});