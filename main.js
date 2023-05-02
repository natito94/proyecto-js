// SE ESTABLECE LA CLASE 'MAGO'
class Mago {
    constructor(nombre, apellido, rango, casa) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rango = rango;
        this.casa = casa;
    }
}

const magoHarry = new Mago("Harry", "Potter", "Alumno", "Gryffindor");
const magoHermione = new Mago("Hermione", "Alumno", "Granger", "Gryffindor");
const magoRon = new Mago("Ron", "Wisley", "Alumno", "Gryffindor");
const magoMinerva = new Mago ("Minerva", "McGonagall", "Profesor", "Gryffindor")
const magoDraco = new Mago("Draco", "Malfoy", "Alumno", "Slytherin");
const magoGregory = new Mago ("Gregory", "Goyle", "Alumno", "Slytherin")
const magoSnape = new Mago("Severus", "Snape", "Profesor", "Slytherin");
const magoCedric = new Mago ("Cedric", "Diggory", "Alumno", "Hufflepuff");
const magoPompona = new Mago ("Pompona", "Sprout", "Profesor", "Hufflepuff");
const magoHanna = new Mago ("Hanna", "Abbott", "Alumno", "Hufflepuff")
const magoLuna = new Mago ("Luna", "Lovegood", "Alumno", "Ravenclaw")
const magoSybill = new Mago ("Sybill", "Trelawney", "Profesor", "Ravenclaw")
const magosCho = new Mago ("Cho", "Chang", "Alumno", "Ravenclaw")

const arrayMago = []

arrayMago.push(magoHarry);
arrayMago.push(magoHermione);
arrayMago.push(magoRon);
arrayMago.push(magoMinerva);
arrayMago.push(magoDraco);
arrayMago.push(magoGregory);
arrayMago.push(magoSnape);
arrayMago.push(magoCedric);
arrayMago.push(magoPompona);
arrayMago.push(magoHanna);
arrayMago.push(magoLuna);
arrayMago.push(magoSybill);
arrayMago.push(magosCho);

console.log(arrayMago);

// FUNCION MENU
function menu() {
    let nombre = prompt("Hola, podrias ingresar tu nombre?");
    alert(nombre + " Bienvenido/a a Hogwarts");
    alert("Por favor, selecciona una opcion para continuar.");
    let opcion = parseInt(prompt("Ingresa: \n 1) Para crear mi usuario \n 2) Para conocer mi casa \n 3) Para conocer a los integrantes de las diferentes casas \n 4) Para salir"));
    return opcion;
}
// FUNCION PARA CREAR UN NUEVO MAGO
function nuevoMago() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let rango = prompt("Ingrese su rango (Alumno o profesor): ");
    let casa = prompt("Ingrese su casa (Gryffindor, Hufflepuff, Ravenclaw, Slytherin): ");
    let mago = new Mago(nombre, apellido, rango, casa);
    arrayMago.push(mago);
    console.log(arrayMago);
    alert(nombre + " " +apellido +" "+rango+" "+ casa)
    alert("Gracias por registrarte")
}

// FUNCION PARA CUESTIONARIO INTERACTIVO

function cuentionarioCasa() {
    alert("Como es tu primer año en la escuela, debemos seleccionar tu casa. Para ello simplemente deberas completar el siguiente cuentionario")

    let datoUno = parseInt(prompt("¿Qué cualidad crees que domina en vos? 1) Valentía 2) Inteligencia 3) Lealtad 4) Astucia"));
    while(datoUno < 0 || datoUno > 4) {
        alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '4'");
        datoUno = parseInt(prompt("¿Qué cualidad crees que domina en vos? 1) Valentía 2) Inteligencia 3) Lealtad 4) Astucia"));
    }
    let datoDos = parseInt(prompt("¿Que piensas que es mas importante? 1) Amistad 2) Conocimiento 3) Fama  4) Poder"));
    while(datoDos < 0 || datoDos > 4) {
        alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '4'");
        datoDos = parseInt(prompt("¿Que piensas que es mas importante? 1) Amistad 2) Conocimiento 3) Fama  4) Poder"));
    }
    let datoTres = parseInt(prompt("¿Que te atrae más de la magia? 1) Hechizos y Conjuros 2) Transformaciones 3) Adivinación 4) Posiones"));
    while(datoTres < 0 || datoTres > 4) {
        alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '4'");
        datoTres = parseInt(prompt("¿Que te atrae más de la magia? 1) Hechizos y Conjuros 2) Transformaciones 3) Adivinación 4) Posiones"));
    }
    let datoCuatro = parseInt(prompt("¿Que objeto eligirias? 1) Una capa de invisibilidad 2) Una escoba 3) Un libro de hechizos 4) Una varita mágica"));
    while(datoCuatro < 0 || datoCuatro > 4) {
        alert("El valor no es valido, recuerda que debes agregar un valor del '1' al '4'");
        datoCuatro = parseInt(prompt("¿Que objeto eligirias? 1) Una capa de invisibilidad 2) Una escoba 3) Un libro de hechizos 4) Una varita mágica"));
    }

    let cantidadDeDatos = 4
    function casaMago(datoUno, datoDos, datoTres, datoCuatro, cantidadDeDatos) {
        let promedio = (datoUno + datoDos + datoTres + datoCuatro) / cantidadDeDatos;
        return promedio;
    }
    let promedio = casaMago(datoUno, datoDos, datoTres, datoCuatro, cantidadDeDatos)

    if (promedio === 2) {
        alert("Ravenclaw")
    } else if (promedio === 3) {
        alert("Hufflepuff")
    } else if (promedio === 4) {
        alert("Slytherin")
    } else if (promedio === 1) {
        alert("Gryffindor")
    }
}

//METODO DE BUSQUEDA PARA MAGOS POR CASA
function buscarMagosPorCasa() {
    let casa = prompt("Ingrese el nombre de la casa: ");
    let magos = arrayMago.filter(magos => magos.casa === casa);
    let nombresMagos = magos.map(mago => mago.nombre).join(", ");
    let mensaje = `Los Magos de la casa ${casa} son: ${nombresMagos}`;
    alert(mensaje);
    console.log(magos);
}
//FUNCION SALIDA DEL SIMULADOR
function salir() {
    alert("Buena suerte en todo tu año escolar");
}
// SE ESTABLECEN LOS ENLACES DEL MENU
let opcion = menu();
switch (opcion) {
    case 1:
        nuevoMago();
        break;
    case 2:
        cuentionarioCasa();
        break;
    case 3:
        buscarMagosPorCasa();
        break;
    case 4:
        salir();
        break;
    default:
        alert("La opcion es incorrecta, por favor ingresa un nuemero nuevamente");
        break;
}
