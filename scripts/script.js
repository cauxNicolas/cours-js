//carroussel
let imgCarroussel = [
    "http://www.clcholidays.com/clcwv3/wp-content/uploads/2014/09/australia_heading.jpg",
    "http://www.visasgrant.co.in/Melbourne_City_Australia.jpg",
    "http://www.ilmaustralia.com/wp-content/uploads/2014/06/Great-Ocean-Road-Victoria-Australia1.jpg"
]

let occurrenceCarroussel = 0;

setInterval(function() {
    let img = document.querySelector("#slider img");
    img.src = imgCarroussel[occurrenceCarroussel];
    occurrenceCarroussel++
    if (occurrenceCarroussel == imgCarroussel.length) {
        occurrenceCarroussel = 0;
    }
}, 5000)


//navigation aleatoire



/**
 * randomText - rend une chaine de caracter de maniere aleatoire
 * @param text: string  - chaine de caractere à melanger
 */

function randomText(text = "c'est un exo") {
    let tableau = text.split(""); //convertir une chaine de caractere en tableau de caractere
    tableau = arrayToStringRandom(tableau).join(""); //appel a la fonction
    //tableau = tableau.join("")
    //console.error(tableau); //affichage du tableau aleatoire
    return tableau; // retourne une string aléatoire
}



/**
 *
 *arrayToStringRandom - re,voie un nouveau tableau des elements de l'ancien mais de maniere aleatoire
 * @param tab tableau a melanger
 * @returns newArray = nouveau tableau
 */
function arrayToStringRandom(tab = []) { //nouvelle variable tab
    let tabRandom = [] // tableau des entiers deja recuperer - eviter les doublons de caracteres
    let random, newArray = []; //creation de deux variables - random est la variable qui stockera le nombre aleatoire - newArray sera le nouveau tableau créé à partir des nombres aleatoires
    for (let i = 0; i < tab.length; i++) { //permet de générer tous les caracteres selon la taille du tableau
        do {
            random = getRandomInt(0, tab.length); //retourne un entier aleatoire compris entre 0 et la taille du tableau (tab)
        } while (tabRandom.includes(random)); ////verifier si l'entier a deja ete recuperer. Si oui, relance l'appel de la fonction getRandomInt
        tabRandom.push(random); //Ajouter l'entier aleatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); //ajouter le caractere aleatoire dans le tableau(newArray)

        console.log(random);
    }
    return newArray; //Retourne le nouveau tableau
}


//fonction de mozilla
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let baliseA = document.querySelectorAll("#header > nav a ")
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText("Test random"); //appel à la fonction
}
console.log(baliseA);



/*********************************
 *           Exercice 3          *
 *********************************/

//charger une image
/* let image = "https://www.australieautrement.com/wp-content/uploads/2016/08/roadsign-australie-280x180.jpg"

let boutonImg = addEventListener("click", function() {
    let change = document.querySelectorAll("#services img");
    image.src = image[image];
}) */

/***************************************************
 *           Exercice 3 - Correction mike          *
 **************************************************/


/* let image = "https://www.australieautrement.com/wp-content/uploads/2016/08/roadsign-australie-280x180.jpg"


let dataImagesHtml = document.querySelectorAll("#services img")
    //console.log(dataImagesHtml);
for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        //console.log(dataImagesHtml[i]);
        dataImagesHtml[i].src = image;
    })
} */


/*********************************
 *           Exercice 4          *
 *********************************/

//exo OK
/* let image = ["https://www.australieautrement.com/wp-content/uploads/2016/08/roadsign-australie-280x180.jpg",
    "https://www.australieautrement.com/wp-content/uploads/2016/08/gibb-river-road-copyright-TOURISM-WA-280x180.jpg",
    "http://img.over-blog-kiwi.com/0/92/98/17/20140712/ob_477053_8.jpg"
]


let dataImagesHtml = document.querySelectorAll("#services img")
    //console.log(dataImagesHtml);
for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        //console.log(dataImagesHtml[i]);
        dataImagesHtml[i].src = image[i];
    })
} */


/***************************************************
 *           Exercice 4 - Correction mike          *
 **************************************************/


let tabimageArticle = ["https://www.australieautrement.com/wp-content/uploads/2016/08/roadsign-australie-280x180.jpg",
    "https://www.australieautrement.com/wp-content/uploads/2016/08/gibb-river-road-copyright-TOURISM-WA-280x180.jpg",
    "http://img.over-blog-kiwi.com/0/92/98/17/20140712/ob_477053_8.jpg"
]


let dataImagesHtml = document.querySelectorAll("#services img")
    //console.log(dataImagesHtml);
for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        //console.log(dataImagesHtml[i]);
        dataImagesHtml[i].src = tabimageArticle[i];
    })
}

//msylvestreets@yahoo.fr