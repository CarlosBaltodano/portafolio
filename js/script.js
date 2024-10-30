window.addEventListener("scroll", function () {
    const homeSection = document.getElementById("home");
    const botonVolverInicio = document.getElementById("botonVolverInicio");

    // Detecta la posición del scroll
    const homeBottom = homeSection.getBoundingClientRect().bottom;

    // Si la sección "home" está fuera de la vista, muestra el botón
    if (homeBottom < 0) {
        botonVolverInicio.style.display = "block";
    } else {
        botonVolverInicio.style.display = "none";
    }
});