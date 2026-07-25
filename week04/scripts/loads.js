const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

console.log(currentYear);
console.log(lastModified);

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;