

class Consulta {
    constructor(nombre, apellido, casa, texto ) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.casa = casa;
        this.texto = texto;
    }
}

const arrayConsultas = []; 

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const casa = document.getElementById("casa");
    const texto = document.getElementById("texto")

    const consulta = new Consulta(nombre.value, apellido.value, casa.value, texto.value);

    arrayConsultas.push(consulta);

    console.log(arrayConsultas);

    formulario.reset();
})