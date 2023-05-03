const closeKursi = document.getElementById("closeKursi");
const openKursi = document.getElementById("katalogText1")
const kursi = document.getElementById("kursi");

openKursi.addEventListener("click", ()=> {
    kursi.style = "opacity: 1; visibility: visible;";
});
backList.addEventListener("click", ()=> {
    kursi.style = "opacity: 0; visibility: hidden;";
});

