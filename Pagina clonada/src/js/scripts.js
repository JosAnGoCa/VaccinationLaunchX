this.window.addEventListener("scroll", function () {
    var header = document.querySelector("#nav-var");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

var expandir = document.querySelectorAll(".preparations-expand");

// Funciones
function contraerTodos(elementos) {
    elementos.forEach(elemento => {
        elemento.classList.remove("expand");
    });
}

expandir.forEach(elemento => {
    elemento.addEventListener("click", () => {
        if (elemento.classList.contains("expand")) {
            elemento.classList.remove("expand");
        } else {
            contraerTodos(expandir);
            elemento.classList.add("expand");
        }
    });
});
