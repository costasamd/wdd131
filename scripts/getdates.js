const year = document.querySelector("#currentyear");
const lastupdate = document.querySelector("#lastmodified")
const today = new Date();

year.innerHTML = today.getFullYear();
lastupdate.innerHTML = `Last modification: ${new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today)}`

