const form = document.getElementById('register-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const username=document.getElementById('reg-username').value;
   const password=document.getElementById('reg-password').value;
   const confirmPassword=document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    return;
  }
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);


  message.textContent = "Registration successful!";
});