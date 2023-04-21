const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNbPokemon = document.querySelector(".nbPokemon")
    getInfosAPI(inputNbPokemon);
})

function getInfosAPI(inputNbPokemon){
    const pokemonDiv = document.querySelector(".pokemonDiv")
    
    fetch( "https://pokeapi.co/api/v2/pokemon/?limit="+inputNbPokemon.value )  
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach((pokemon) => {
        pokemonDiv.innerHTML += "<p>" + pokemon.name + "</p>"
        pokemonDiv.innerHTML += "<img src =https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon.XXX+"</img>" 
        
    })

    })

.catch((error) => pokemonDiv.innerHTML = error)
}