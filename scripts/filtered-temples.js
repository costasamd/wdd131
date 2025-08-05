console.log("JS is updated and running");

const year = document.querySelector("#currentyear");
const lastupdate = document.querySelector("#lastmodified")
const today = new Date();
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#antic");
const newLink = document.querySelector("#recent");
const largeLink = document.querySelector("#big");
const smallLink = document.querySelector("#little");

// Set the current year and last modification date
year.innerHTML = today.getFullYear();
lastupdate.innerHTML = `Last modification: ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today)}`

//menu iteraction

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/525cbf6ff355b3a65040c856d2e421651a716894/full/%21500%2C/0/default"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/93fe327ea5a8f82b20a48e283e51dc32f57ba148/full/800%2C/0/default?lang=eng"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 100000,
        imageUrl:
            "https://assets.churchofjesuschrist.org/ff/8c/ff8c7df0c3ca5323549b8f87790ec42c0ce18662/provo_city_center_temple_exterior.jpeg"
    }
    // Add more temple objects here...
];

displayTemples(temples);

function displayTemples(filteredTemples) {
    document.querySelector('.photos').innerHTML = ''; // Clear previous content
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);


        document.querySelector('.photos').appendChild(card);
    });
}

//botton link functionality

homeLink.addEventListener("click", () => {
    displayTemples(temples);
});


oldLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => parseInt(temple.dedicated) < 1900));
});

newLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => parseInt(temple.dedicated) > 2000));
})

largeLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => temple.area < 10000));
});