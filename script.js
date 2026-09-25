function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Close mobile menu after clicking a navigation item
document.querySelectorAll("#navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navMenu").classList.remove("show");
    });
});
