const closeKursi = document.getElementById("closeKursi");
const openKursi = document.getElementById("katalogText1")
const backList = document.getElementById("backList");
const kursi = document.getElementById("kursi");
const TextKursi = document.getElementById("TextKursi");
const openPriceList = document.getElementById("openPriceList")
const PriceList = document.getElementsByClassName("PriceList")


openKursi.addEventListener("click", ()=> {
    kursi.style = "opacity: 1; visibility: visible;";
    PriceList[0].style = "opacity: 0; visibility: hidden;";
});
backList.addEventListener("click", ()=> {
    kursi.style = "opacity: 0; visibility: hidden;";
    PriceList[0].style = "opacity: 0; visibility: hidden;";
});
kursi.addEventListener("mousedown", ()=> {
    TextKursi.style = 'animation: left 0.2s esea 1; animation-fill-mode: for fowards;';
});
openPriceList.addEventListener("click", ()=> {
    PriceList[0].style = "opacity: 1; visibility: visible;";
    kursi.style = "opacity: 0; visibility: hidden;";
});
