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