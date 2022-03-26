console.log("hello Benny")


function myFavoriteColor(evt) {
    alert ('My favorite color is blue')
}

let myFavoriteColorPop = document.querySelector("#color");

myFavoriteColorPop.addEventListener('click', myFavoriteColor); 

function myFavoritePlace(evt) {
    alert ('My favorite place is West Valley City')
}

let myFavoritePlacePop = document.querySelector("#place");

myFavoritePlacePop.addEventListener('mouseover', myFavoritePlace); 

function myFavoriteRitual(evt) {
    alert ('My favorite ritual is the gym!')
}

let myFavoriteRitualPop = document.querySelector("#ritual");

myFavoriteRitualPop.addEventListener('dblclick', myFavoriteRitual); 

