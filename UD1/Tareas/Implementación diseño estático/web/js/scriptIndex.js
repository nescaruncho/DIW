window.addEventListener("scroll", function() {
    var header = document.getElementById("divHeader");
    if (window.scrollY > 190) { // Cambia el valor si prefieres otro umbral
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
