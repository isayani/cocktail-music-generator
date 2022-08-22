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
            var rand = Math.floor(Math.random() * response.drinks.length);
            var drink = response.drinks[rand];

            var drink_name = drink.strDrink
            var drink_img = drink.strDrinkThumb;
            var drink_id = drink.idDrink

            // add name and image to cocktailEl
            var drinkNameEl = document.createElement("h2")

            drinkNameEl.setAttribute('style','color: #083637; font-weight: 700; font-size: 30px; font-style: italic; margin-top: 20px;')
            drinkNameEl.textContent = drink_name
            cocktailEl.appendChild(drinkNameEl)

            var drinkImageEl = document.createElement("img")
            drinkImageEl.setAttribute('src', drink_img)
            drinkImageEl.setAttribute('style','width: 300px;')
            cocktailImgEl.appendChild(drinkImageEl)

            // lookup ingredients by cocktail id (Not all will have ingredients available)
            fetch('https://the-cocktail-db.p.rapidapi.com/lookup.php?i='+drink_id, options)
                .then(response => response.json())
                .then(function(response){
                    var drink_details = response.drinks[0];

                    var drinkDetailLi = document.createElement("ul")
                    drinkDetailLi.setAttribute('style', 'margin-bottom: 20px; margin-top: 20px')

                    var drinkDetailEl = document.createElement("li")
                    drinkDetailEl.textContent = "Instructions: " + drink_details.strInstructions
                    drinkDetailLi.appendChild(drinkDetailEl)  

                    for (var i = 1; i < 13; i ++){
                        var ingredient = "strIngredient" + i
                        var measure = "strMeasure" + i
                        if (drink_details[ingredient] !== null){
                            var drinkDetailEl = document.createElement("li")
                            drinkDetailEl.setAttribute('style', 'font-weight: 300; margin-left: 20px; margin-top: 5px; margin-bottom: 5px;')
                            drinkDetailEl.textContent = "• " + drink_details[ingredient] + ": " + drink_details[measure]
                            drinkDetailLi.appendChild(drinkDetailEl)  
                        }
                    }

                    cocktailEl.appendChild(drinkDetailLi)
                    })
                .catch(err => console.error(err));
                })
        .catch(err => console.error(err));    

        var fixedImgEl = document.querySelector('.fixedImg')
        fixedImgEl.setAttribute('style', 'width: 300px;')
}

// get youtube video id to insert into html embed
function search_music(keywords) {
    var api_key_yt = "AIzaSyD_lDxq7TySDBVWOUaG3dZ8KZ7FAQnqbvE"
    var search_params = keywords 
    var url_yt = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search_params}&type=video&videoEmbeddable=true&videoSyndicated=true&key=${api_key_yt}`
    fetch(url_yt)
    .then(response => response.json())
    .then((data) => {
        var rand = Math.floor(Math.random() * 4);
        var videoId = data.items[rand].id.videoId
        var videoTitle = data.items[rand].snippet.title

        // must be in results page to access content elements below
        var iframeYT = document.getElementById("iframeYT")
        iframeSrc = "https://www.youtube.com/embed/" + videoId
        iframeYT.setAttribute('src', iframeSrc)

        // grab YouTube video title and genre
        var ytGenreEl = document.getElementById("ytGenre")
        var ytTitleEl = document.getElementById("ytTitle")

        ytGenreEl.innerHTML = `${genre}`
        ytTitleEl.innerHTML = `${videoTitle}`
        ytGenreEl.setAttribute('style','color: #083637; font-weight: 700; font-size: 30px; font-style: italic; margin-top: 20px;')
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
    "Scotch": "Bagpipe",
    "Bourbon": "Blues",
    "Brandy": "Soul"
}

// listen for button click, execute which html page user is on
if (window.location.pathname === "/index.html" || window.location.pathname === "/cocktail-music-generator/") {
    console.log("on index")
        // Vars for moments and elements
        var today = moment()
        var isAfterDateString = today.subtract(21,"years").format("DD/MM/YYYY")
        var isAfterDate = moment(isAfterDateString, "DD/MM/YYYY")
        var mmButtonEl = document.querySelector("#mixmatch")
        var dateInputEl = document.querySelector("#dateInput")
        var ageModalEl = document.querySelector(".ageModal")
        var inputCardEl = document.querySelector(".inputCard")
        

        // Event listener for verify age button on modal
        mmButtonEl.addEventListener("click", function (event) {
            var verifyBtnEl = document.querySelector("#verifyBtn")
            event.preventDefault()
            verifyBtnEl.addEventListener("click", function(event) {
                event.preventDefault()
                
                if((isAfterDate).isSameOrAfter(moment(dateInputEl.value, "DD/MM/YYYY"))) { // "21", years
                    
                    console.log("legal age")
                    ageModalEl.setAttribute("id", "alcToggle")
                    inputCardEl.removeAttribute("id", "alcToggle")
                    
                } else if(isAfterDate.isBefore(moment(dateInputEl.value, "DD/MM/YYYY"))) {
                    console.log("not legal age")
                    ageModalEl.innerHTML = "";
                    ageModalEl.innerHTML = `<h1
                    id="landingHeader"
                    class="italic text-white font-bold text-5xl text-center"
                  >
                    Oops!
                  </h1>
                  <p class="text-white text-xl italic">
                    You aren't old enough to access this site. Visit us when you turn 21.
                  </p>`
                    
                } else {
                    document.location.reload()
                }
            })
        })

    // submit button (index.html)
    var submitEl = document.getElementById("submit")  

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

    // lookup genre from object based on alcohol type
    var genre = keywordLookup[alcohol_type_input]

    // grab banner html and update 
    var banner = document.getElementById("resultsBanner")
    banner.setAttribute('style', 'font-weight: 700')
    banner.innerHTML = `${alcohol_type_input} & ${genre}`

    // run functions on load
    search_drink(alcohol_type_input)
    search_music(genre + "live music")

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

//Mac - AIzaSyAjjB7-4pZIVOCDy1P9f8sdttsjhlsAP-k
//Insha - AIzaSyDsYfiJwPpAqSyf2KNiU1suyknWvICjtOA
//Ash - AIzaSyD_lDxq7TySDBVWOUaG3dZ8KZ7FAQnqbvE