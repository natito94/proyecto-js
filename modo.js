//MODO OSCURO:

const modoOscuro = document.getElementById("modoOscuro");

modoOscuro.addEventListener("click", ()=> {
    document.body.classList.toggle("oscuro");
    if(document.body.classList.contains("oscuro")){
        localStorage.setItem ("modo", "oscuro");
    } else {
        localStorage.setItem ("modo", "claro")
    }
})

const modo = localStorage.getItem("modo");

if(modo === "oscuro") {
    document.body.classList.add("oscuro");
} else {
    document.body.classList.remove("oscuro");
}