// Affiche les pokémons lors du clic sur Valider
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputNbPokemon = document.querySelector(".nbPokemon")
    getPokemon(inputNbPokemon);
})

// Définir le nombre de pokémon que l'on veut afficher
function getPokemon(inputNbPokemon){
    const pokemonDiv = document.querySelector(".pokemonDiv")
    
    fetch( "https://pokeapi.co/api/v2/pokemon/?limit="+inputNbPokemon.value )  
    .then((response) => response.json())
    .then((allPokemon) => {
        console.log(allPokemon)
        allPokemon.results.forEach(function(pokemon) {
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
        printPokemon(pokeData)

    })
}

// Afficher les donneés

function printPokemon(pokeData){
    let allPokemonContainer = document.getElementById('allPokemonDiv')
    Object.assign(allPokemonContainer.style, {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        gap : "10px"
    })

    let pokemonContainer = document.createElement("div")
    Object.assign(pokemonContainer.style, {
        border : "1px solid black",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        width : "250px",
        height : "250px"
    })

    // Afficher le numéro
    let pokemonNumber = document.createElement('p')
    pokemonNumber.innerText = "#" + pokeData.id.toString().padStart(3, '0');
    
    // Afficher le nom
    let pokemonName = document.createElement('h4')
    pokemonName.innerText = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);

    // Afficher l'image
    let pokemonImg = document.createElement('img')
    pokemonImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokeData.id+'.png'

    // Afficher le type
    let pokemonType = document.createElement('p')
    pokemonType.innerText = pokeData.types[0].type.name.charAt(0).toUpperCase() + pokeData.types[0].type.name.slice(1)
    
    pokemonContainer.append(pokemonNumber, pokemonName, pokemonImg, pokemonType);
    allPokemonContainer.appendChild(pokemonContainer);
}