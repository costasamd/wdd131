
const year = document.getElementById("currentyear");
const today = new Date();

//get year from system

year.innerHTML = today.getFullYear();


// form submit button with storage

let count = Number(localStorage.getItem("submitCount")) || 0;

document.querySelector("form").addEventListener("submit", () => {
    count++;
    localStorage.setItem("submitCount", count)
});

