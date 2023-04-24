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
        gap : "20px",
        fontFamily : "Barlow Condensed"
    })

    let pokemonContainer = document.createElement("div")
    Object.assign(pokemonContainer.style, {
        borderRadius : "10px",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        width : "250px",
        height : "250px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        gap: "0px"
    })

    // Afficher le numéro
    let pokemonNumber = document.createElement('p')
    pokemonNumber.innerText = "#" + pokeData.id.toString().padStart(3, '0');
    
    // Afficher le nom
    let pokemonName = document.createElement('h4')
    pokemonName.innerText = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
    pokemonName.style.margin ="Opx"

    // Afficher l'image
    let pokemonImg = document.createElement('img')
    pokemonImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokeData.id+'.png'

    // Afficher le type
    let pokemonType = document.createElement('p')
    pokemonType.innerText = pokeData.types[0].type.name.charAt(0).toUpperCase() + pokeData.types[0].type.name.slice(1)
    

    // Afficher l'icone
    let pokemonIcon = document.createElement('i')
    

    //Background et icone en fonction du type du pokémon
    switch(pokeData.types[0].type.name){
        case 'fire':
        pokemonContainer.style.backgroundColor = "#FDDFDF" 
        pokemonIcon.classList.add('fa-solid', 'fa-fire');
        pokemonIcon.style.color = 'orange'  
        break

        case 'grass':
        pokemonContainer.style.backgroundColor = "#DEFDE0" 
        pokemonIcon.classList.add('fa-solid', 'fa-seedling');
        pokemonIcon.style.color = 'green'    
        break

        case 'normal':
        pokemonContainer.style.backgroundColor = "#f0ece4"
        pokemonIcon.classList.add('fa-regular','fa-circle');
        pokemonIcon.style.color = 'white'     
        break

        case 'water':
        pokemonContainer.style.backgroundColor = "#DEF3FD"
        pokemonIcon.classList.add('fa-solid','fa-droplet');
        pokemonIcon.style.color = '#a0cfef'     
        break

        case 'flying':
        pokemonContainer.style.backgroundColor = "#DEF3FD"
        pokemonIcon.classList.add('fa-solid', 'fa-dove');
        pokemonIcon.style.color = 'white'     
        break

        case 'poison':
        pokemonContainer.style.backgroundColor = "#f29b9b"
        pokemonIcon.classList.add('fa-solid','fa-skull-crossbones');
        pokemonIcon.style.color = 'red'     
        break

        case 'electric':
        pokemonContainer.style.backgroundColor = "#f7f29c"  
        pokemonIcon.classList.add('fa-solid', 'fa-bolt');  
        pokemonIcon.style.color = 'yellow'   
        break

        case 'ground':
        pokemonContainer.style.backgroundColor = "#bf8040"
        pokemonIcon.classList.add('fa-solid', 'fa-tree');
        pokemonIcon.style.color = 'brown'     
        break

        case 'rock':
        pokemonContainer.style.backgroundColor = "#dfe1e5"
        pokemonIcon.classList.add('fa-solid', 'fa-hill-rockslide');
        pokemonIcon.style.color = 'grey'     
        break

        case 'psychic':
        pokemonContainer.style.backgroundColor = "#f6edf7"    
        pokemonIcon.classList.add('fa-solid', 'fa-brain');
        pokemonIcon.style.color = 'rose' 
        break

        case 'ice':
        pokemonContainer.style.backgroundColor = "#ccffff"
        pokemonIcon.classList.add('fa-solid', 'fa-igloo');
        pokemonIcon.style.color = 'white'     
        break

        case 'bug':
        pokemonContainer.style.backgroundColor = "#eafcd6"
        pokemonIcon.classList.add('fa-solid', 'fa-bug');
        pokemonIcon.style.color = 'brown'     
        break

        case 'ghost':
        pokemonContainer.style.backgroundColor = "#f7f7f7" 
        pokemonIcon.classList.add('fa-solid', 'fa-ghost');
        pokemonIcon.style.color = 'grey'    
        break

        case 'steel':
        pokemonContainer.style.backgroundColor = "#b5b5b5"
        pokemonIcon.classList.add('fa-solid', 'fa-fire');
        pokemonIcon.style.color = 'orange'     
        break

        case 'dragon':
        pokemonContainer.style.backgroundColor = "#562f16"
        pokemonIcon.classList.add('fa-solid', 'fa-dragon');
        pokemonIcon.style.color = 'orange'     
        break

        case 'dark':
        pokemonContainer.style.backgroundColor = "#1b2431"
        pokemonIcon.classList.add('fa-solid', 'fa-moon');
        pokemonIcon.style.color = 'black'     
        break

        case 'fairy':
        pokemonContainer.style.backgroundColor = "#ff8dcc"
        pokemonIcon.classList.add('fa-solid', 'fa-wand-magic-sparkles');
        pokemonIcon.style.color = 'rose'     
        break

        case 'fighting':
        pokemonContainer.style.backgroundColor = "#226c79"
        pokemonIcon.classList.add('fa-solid', 'fa-skull');
        pokemonIcon.style.color = 'black'     
        break
    }
    
    // Ajout des attributs du pokémon dans le container pokémon
    pokemonContainer.append(pokemonNumber, pokemonName, pokemonImg, pokemonIcon, pokemonType);
    // Ajout de toutes les cartes pokémon dans le container général
    allPokemonContainer.appendChild(pokemonContainer);
}