// Affiche les pokémons lors du clic
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNbPokemon = document.querySelector(".nbPokemon")
    getInfosAPI(inputNbPokemon);
})

// Définir le nombre de pokémon que l'on veut afficher
function getInfosAPI(inputNbPokemon){
    const pokemonDiv = document.querySelector(".pokemonDiv")
    
    fetch( "https://pokeapi.co/api/v2/pokemon/?limit="+inputNbPokemon.value )  
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
        getPokemonData(pokemon)
    })

    })

.catch((error) => pokemonDiv.innerHTML = error)
}

// Récuperer les infos de chaque pokémon
function getPokemonData(pokemon){
    let url = pokemon.url
    
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        console.log(pokeData)
    })
}