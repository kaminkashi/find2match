var icon = document.getElementById("menuIcon");
var nav = document.getElementById("myNav");

function handleMenuToggle(event) {
    event.stopPropagation();
    nav.classList.toggle("active");
    icon.classList.toggle("active");
}

document.addEventListener('click', function () {
    nav.classList.remove("active");
    icon.classList.remove("active");
});

icon.addEventListener('click', handleMenuToggle);

// Function to show the popup
function showPopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "none";
}

// Show the popup when the page loads
window.onload = showPopup; 

const portfolioTitle = document.querySelector('.portfolio-title');

portfolioTitle.addEventListener('mouseover', () => {
  portfolioTitle.classList.add('shine-animation'); // Add shining animation class
});

portfolioTitle.addEventListener('mouseout', () => {
  portfolioTitle.classList.remove('shine-animation'); // Remove shining animation class
});

