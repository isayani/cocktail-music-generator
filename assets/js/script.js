// Cocktail DB API Request please do not share API key!!
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '71b49bbbe1msh7d7145a9fafc631p1fef60jsn7f89507b67c5',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

// lookup drink names by alcohol type, select randomly 
// https://rapidapi.com/thecocktaildb/api/the-cocktail-db/
function search_drink(alcohol_type) {
    // must be in results page to access content elements below
    var cocktailEl = document.getElementById("cocktailId") // cocktail element to insert content (search.html)
    var cocktailImgEl = document.getElementById("imgCard") // cocktail img element to insert content (search.html)
    
    // clear content

    cocktailEl.innerHTML = ""
    cocktailImgEl.innerHTML = ""

    fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=' + alcohol_type, options)
        .then(response => response.json())
        .then(function (response) {
            console.log(response)
            var rand = Math.floor(Math.random() * response.drinks.length);
            var drink = response.drinks[rand];
            console.log(drink)

            var drink_name = drink.strDrink
            var drink_img = drink.strDrinkThumb;
            var drink_id = drink.idDrink

            // add name and image to cocktailEl
            var drinkNameEl = document.createElement("h2")
            drinkNameEl.textContent = drink_name
            cocktailEl.appendChild(drinkNameEl)


            var drinkImageEl = document.createElement("img")
            drinkImageEl.setAttribute('src', drink_img)
            cocktailImgEl.appendChild(drinkImageEl)
            console.log(drinkImageEl)


            // lookup ingredients by cocktail id (Not all will have ingredients available)
            fetch('https://the-cocktail-db.p.rapidapi.com/lookup.php?i='+drink_id, options)
                .then(response => response.json())
                .then(function(response){
                    var drink_details = response.drinks[0];
                    console.log(drink_details);

                    var drinkDetailLi = document.createElement("ul")

                    var drinkDetailEl = document.createElement("li")
                    drinkDetailEl.textContent = "Category: " + drink_details.strCategory
                    drinkDetailLi.appendChild(drinkDetailEl)  

                    var drinkDetailEl = document.createElement("li")
                    drinkDetailEl.textContent = "Instructions: " + drink_details.strInstructions
                    drinkDetailLi.appendChild(drinkDetailEl)  

                    for (var i = 1; i < 13; i ++){
                        var ingredient = "strIngredient" + i
                        var measure = "strMeasure" + i
                        if (drink_details[ingredient] !== null){
                            var drinkDetailEl = document.createElement("li")
                            drinkDetailEl.textContent = drink_details[ingredient] + ", " + drink_details[measure]
                            drinkDetailLi.appendChild(drinkDetailEl)  
                        }
                    }

                    cocktailEl.appendChild(drinkDetailLi)
                    })
                .catch(err => console.error(err));
                })
        .catch(err => console.error(err));    
}

// get youtube video id to insert into html embed
function search_music(keywords) {
    var api_key_yt = "AIzaSyAjjB7-4pZIVOCDy1P9f8sdttsjhlsAP-k"
    var search_params = keywords  // pass keywords as string
    var url_yt = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_params}&type=video&videoEmbeddable=true&videoSyndicated=true&key=${api_key_yt}`
    fetch(url_yt)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            var rand = Math.floor(Math.random() * 4);
            var videoId = data.items[rand].id.videoId
            console.log(videoId)

            // must be in results page to access content elements below
            var iframeYT = document.getElementById("iframeYT")
            iframeSrc = "https://www.youtube.com/embed/" + videoId
            iframeYT.setAttribute('src', iframeSrc)
        })    
}

// lookup genre based on alcohol type
var keywordLookup = {
    "Vodka": "Chill",
    "Whiskey": "Country",
    "Wine": "Opera",
    "Absinthe": "Psychedelic Rock",
    "Gin": "The Killers",
    "Rum": "Reggae",
    "Tequila": "Bad Bunny",
    "Mezcal": "Oaxaca Traditional",
    "Scotch": "Bagpipe",
    "Bourbon": "Blues",
    "Brandy": "Soul"

}

// listen for button click, execute functions
console.log(window.location)
if (window.location.pathname === "/index.html" || window.location.pathname === "/cocktail-music-generator/" ) {
    console.log("on index")
    var submitEl = document.getElementById("submit")  // submit button (index.html)

    submitEl.addEventListener("click", function() {
        // get alcohol type from index.html
        var alcohol_type_input = document.getElementById("userInput");

        // save to local storage
        localStorage.setItem("session-input", alcohol_type_input.value)

        // switch to results
        window.location.assign("./results.html")

    })    
} else  {
    console.log("on results")

    // access local storage
    var alcohol_type_input = localStorage.getItem("session-input")
    console.log(alcohol_type_input)


    // lookup genre from object based on alcohol type
    var genre = keywordLookup[alcohol_type_input]

    // grab banner html and update 
    var banner = document.getElementById("resultsBanner")
    banner.innerHTML = `${alcohol_type_input} & ${genre}`

    // run functions on load
    search_drink(alcohol_type_input)
    search_music(genre + "live music")
    console.log(genre)

    // listen for reload
    var newSearchEl = document.getElementById("newSearch")  // submit button (index.html)
    newSearchEl.addEventListener("click", function() {
        // execute functions to fetch data and insert into results.html
        search_drink(alcohol_type_input)
        search_music(genre + "live music")
    })    

    // home button
    var homeBtnEl = document.getElementById("homeBtn")  // submit button (index.html)
    homeBtnEl.addEventListener("click", function() {
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
            window.location.assign("/index.html")
          } else {
            window.location.assign("/cocktail-music-generator/")

          }

    })   
}

