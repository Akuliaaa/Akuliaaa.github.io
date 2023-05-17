const Logo = document.getElementsByClassName('Logo');
const Login = document.getElementsByClassName('Login');

Login[0].addEventListener('click', function clickMouse() {
    window.location.href = "login.html";
});
Logo[0].addEventListener('click', function clickMouse() {
    window.location.href = "index.html";
  });