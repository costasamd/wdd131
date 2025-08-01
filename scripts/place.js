const year = document.querySelector("#currentyear");
const lastupdate = document.querySelector("#lastmodified")
const today = new Date();
const windChill = document.querySelector("#chill");

year.innerHTML = today.getFullYear();
lastupdate.innerHTML = `Last modification: ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}`



function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = Math.round(
            35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))
        );
        return chill;
    } else {
        return "N/A";
    }
    
}

windChill.innerHTML = calculateWindChill(15, 6);
