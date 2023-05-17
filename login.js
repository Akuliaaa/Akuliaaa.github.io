const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const close = document.getElementsByClassName('close');

registerLink.addEventListener ('click', ()=> {
  wrapper.classList.add('active');
});
loginLink.addEventListener ('click', ()=> {
  wrapper.classList.remove('active');
});
close[0].addEventListener('click', function clickMouse() {
  window.location.href = "index.html";
});