var cocktailEl = document.getElementById("cocktailContent")
var submitEl = document.getElementById("submit")

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
function search_drink() {
    var alcohol_type_input = document.getElementById("userInput");
    if (!alcohol_type_input) {
        var alcohol_type_input = 'vodka'; // hardwire vodka if no input
    }
    fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=' + alcohol_type_input, options)
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
            cocktailEl.appendChild(drinkImageEl)
            console.log(drinkImageEl)


            // lookup ingredients by cocktail id (Not all will have ingredients available)
            fetch('https://the-cocktail-db.p.rapidapi.com/lookup.php?i='+drink_id, options)
                .then(response => response.json())
                .then(function(response){
                    var drink_details = response.drinks[0];
                    console.log(drink_details);
                    var list = Object.entries(drink_details)  //convert object to array of keys 
                    list.forEach(([key, value]) => {
                        // add name and image to cocktailEl
                        if (value!==null) {
                            var drinkDetailEl = document.createElement("p")
                            drinkDetailEl.textContent = key + ': ' + value
                            cocktailEl.appendChild(drinkDetailEl)                        
                        }
                        })
                    })
                .catch(err => console.error(err));
                })
        .catch(err => console.error(err));    
}


// listen for button click, grab input, fetch cocktail, add to HTML
submitEl.addEventListener("click", search_drink)
// search_drink()




