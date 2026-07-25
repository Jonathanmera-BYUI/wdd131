const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
    console.log("Clique funcionando!");

    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.J0Hb_d5RAMlLlnHWaztgggHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.aA0Zk354jQ0zGnokqb8YRwHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.qhVnd4gSQ1aFf-Nhdk_N1wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://tse2.mm.bing.net/th/id/OIP.bgOLbBOEs7rBGdyYP6h4HQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://tse4.mm.bing.net/th/id/OIP.j6PmtSVnetAIgGGHbqtGbgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.Gzqz-GrfC7FzQL0Tqv7rfwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://tse3.mm.bing.net/th/id/OIP.b70YKJ2vmNnYvWzGEVVezAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  // Add more temple objects here...

  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://tse1.mm.bing.net/th/id/OIP.h-Tx8--cyaC5-ybs633P4gHaFU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
    templeName: "Campinas Brazil",
    location: "Campinas, São Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48589,
    imageUrl:
    "https://tse4.mm.bing.net/th/id/OIP.1EUiTCRYlQ6ZPezuMViLWwHaGL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
    templeName: "Curitiba Brazil",
    location: "Curitiba, Paraná, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
    "https://tse3.mm.bing.net/th/id/OIP.To5BGJy7ZDlXs23Pdh485wHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
}
];

function displayTemples(temples) {
    temples.forEach((temple) => {
        const card = document.createElement("figure");
        const title = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

                
        title.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

document.querySelector(".gallery").appendChild(card);

    });
}
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.textContent;

        document.querySelector(".gallery").innerHTML = "";

        if (filter === "Home") {
            displayTemples(temples);
        }

        if (filter === "Old") {
            displayTemples(
                temples.filter((temple) => {
                    const year = parseInt(temple.dedicated);
                    return year < 1900;
                })
            );
        }

        if (filter === "New") {
            displayTemples(
                temples.filter((temple) => {
                    const year = parseInt(temple.dedicated);
                    return year > 2000;
                })
            );
        }

        if (filter === "Large") {
            displayTemples(
                temples.filter((temple) => {
                    return temple.area > 90000;
                })
            );
        }

        if (filter === "Small") {
            displayTemples(
                temples.filter((temple) => {
                    return temple.area < 10000;
                })
            );
        }
    });
});