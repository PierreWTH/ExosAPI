
const inputNomJeu = document.querySelector(".nomJeu")
inputNomJeu.addEventListener("input", (event) => {
    selectGame(inputNomJeu);
})
const listeJeu = document.querySelector(".listeJeu")
listeJeu.style.width = "150px"

function selectGame(inputNomJeu){
    
    
    fetch("https://api.boardgameatlas.com/api/search?name="+inputNomJeu.value+"&client_id=JLBr5npPhV&limit=10")  
    .then((response) => response.json())
    .then((data) => {
        console.log(data.games)
        
        // On vide la liste et on l'actualise des que le texte de l'input change
        listeJeu.innerHTML = ""; 
        // Boucle sur data pour récuperer le nom de chaque nomJeu
        listeJeu.innerHTML += "<option> Choisir un jeu </option>"
        // Boucle sur data pour récuperer le nom de chaque nomJeu
        data.games.forEach((jeu) => {
            listeJeu.innerHTML += "<option>" + jeu.name + "</option>"
    })
    
})
.catch((error) => listeJeu.innerHTML = error)
}

function getInfos(selectedGame){
    const result = document.querySelector(".result")
    
    fetch("https://api.boardgameatlas.com/api/search?name="+selectedGame+"&client_id=JLBr5npPhV&limit=1&exact=true")  
    .then((response) => response.json())
    .then((data) => {
        console.log(data.games[0])
        
        result.innerHTML = "<h2>" + data.games[0].name + "</h2>"
        result.innerHTML += "<p> De " +data.games[0].min_players + " à " + data.games[0].max_players + " joueurs </p>"
        result.innerHTML += data.games[0].description
        result.innerHTML += "<img src="+data.games[0].images.medium+"><img>" 
        
})
.catch((error) => result.innerHTML = error)
}

listeJeu.addEventListener("change", () => {
    const selectedGame = listeJeu.value;
    getInfos(selectedGame)
});

