const reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

document.getElementById("reviewCount").textContent = reviewCount; 

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;