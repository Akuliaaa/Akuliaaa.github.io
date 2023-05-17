const Login = document.getElementsByClassName('Login');
const openKursi = document.getElementsByClassName('openKursi');

Login[0].addEventListener('click', function clickMouse() {
    window.location.href = "login.html";
});
openKursi[0].addEventListener('click', function clickMouse() {
    window.location.href = "kursi.html";
});
