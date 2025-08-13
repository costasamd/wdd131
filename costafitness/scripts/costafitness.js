const getItNow = document.getElementById('promoButton');
const year = document.getElementById("currentyear");
const today = new Date();

//get year from system

year.innerHTML = today.getFullYear();

//banner button
getItNow.addEventListener('click', function () {
    window.location.href = "resources.html";
});
