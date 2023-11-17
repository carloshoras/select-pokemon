const selector = document.getElementById('get-pokemon')

selector.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById('pokemon-select').value}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error('La solicitud no fue exitoso');
        }
        console.log(document.getElementById('pokemon-select').value)
        return response.json()
    })
    .then((data) => {
        const contenedor = document.querySelector('.container');
        contenedor.innerHTML += `
        <div class="infoPokemon">
            <img src="${data.sprites.back_default}"/>
            <p>Nombre: ${data.name}</p>
            <p>Tipo: ${data.types[0].type.name}</p>
            <p>Peso: ${data.weight}</p>
            <p>Altura: ${data.height}</p>
        </div>
        `
    })

})

