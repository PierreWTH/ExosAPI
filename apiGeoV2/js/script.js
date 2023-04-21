const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputCodePostal = document.querySelector(".codepostal")
    getInfosAPI(inputCodePostal);
})

function getInfosAPI(inputCodePostal){
    const ville = document.querySelector(".ville")
    
    fetch("https://geo.api.gouv.fr/communes?codePostal="+inputCodePostal.value+"&fields=nom")  
    .then((response) => response.json())
    .then((data) => {
        
        // Boucle sur data pour récuperer le nom de chaque ville
        data.forEach((ville) => {
            villes.innerHTML += "<option>" + ville.nom + "</option>"
    })
})
.catch((error) => ville.innerHTML = error)
}

const select = document.getElementById("villes")

select.addEventListener('focusout', function() {

    select.innerHTML = '';
});