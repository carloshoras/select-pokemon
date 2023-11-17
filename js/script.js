const contenedor = document.querySelector('body')
const infoPokemon = document.createElement('div')
infoPokemon.setAttribute('class', 'infoPokemon')
contenedor.appendChild(infoPokemon)

const selector = document.getElementById('get-pokemon')

selector.addEventListener('click', () => {
    console.log("hola");
    console.log(document.getElementById('pokemon-select').value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById('pokemon-select').value}`)
    .then((response) => {
         if(!response.ok) {
             throw new Error('La solicitud no fue exitoso');
         }
         return response.json()
     })
     .then((data) => {
        console.log("Mundo")
        infoPokemon.innerHTML =`<div class="infoPokemon"><img src="${data.sprites.back_default}" alt="pokemon"/><p><span>Nombre:</span> ${data.name}</p><p><span>Tipo:</span> ${data.types[0].type.name}</p><p><span>Peso:</span> ${data.weight}</p><p><span>Altura:</span> ${data.height}</p></div>`
    })
})

