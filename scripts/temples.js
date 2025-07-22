const year = document.querySelector("#currentyear");
const lastupdate = document.querySelector("#lastmodified")
const today = new Date();

year.innerHTML = today.getFullYear();
lastupdate.innerHTML = `Last modification: ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}`

//menu iteraction

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});