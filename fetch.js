//SE AGREGA LA API

const integrantesS = document.getElementById('integrantesS');
let characters = []

fetch('https://hp-api.onrender.com/api/characters/house/Slytherin')
.then(respuesta=>respuesta .json())
.then((datos) => {
  characters = [...datos]
  mostrarS(characters)
})
.catch(error => console.log(error))

function mostrarS (datos){
    datos.forEach(character => {
     const li = document.createElement("li");
     li.textContent = ` ${character.name}`
     integrantesS.appendChild(li)
    })
}


const integrantesG = document.getElementById('integrantesG');
let charactersG = []

fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
.then(respuesta=>respuesta .json())
.then((datos) => {
  charactersG = [...datos]
  mostrarG(charactersG)
})
.catch(error => console.log(error))

function mostrarG (datos){
    datos.forEach(character => {
     const li = document.createElement("li");
     li.textContent = ` ${character.name}`
     integrantesG.appendChild(li)
    })         
}

const integrantesH = document.getElementById('integrantesH');
let charactersH = []

fetch('https://hp-api.onrender.com/api/characters/house/hufflepuff')
.then(respuesta=>respuesta .json())
.then((datos) => {
  charactersH = [...datos]
  mostrarH(charactersH)
})
.catch(error => console.log(error))

function mostrarH (datos){
    datos.forEach(character => {
     const li = document.createElement("li");
     li.textContent = ` ${character.name}`
     integrantesH.appendChild(li)
    })         
}

const integrantesR = document.getElementById('integrantesR');
let charactersR = []

fetch('https://hp-api.onrender.com/api/characters/house/Ravenclaw')
.then(respuesta=>respuesta .json())
.then((datos) => {
  charactersR = [...datos]
  mostrarR(charactersR)
})
.catch(error => console.log(error))

function mostrarR (datos){
    datos.forEach(character => {
     const li = document.createElement("li");
     li.textContent = ` ${character.name}`
     integrantesR.appendChild(li)
    })         
}