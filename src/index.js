import "./style.css"

const fetch = require("isomorphic-fetch");

const listOfDrinks = document.getElementById('busqueda');
const loadMoreBtn = document.getElementById('enviar');

const loadMargaritaInstruction = (userQuery) => {
  const DRINKS_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userQuery;
  fetch(DRINKS_URL)
    .then(response => response.json())
    .then(responseJson => {

      if (document.getElementsByClassName("drink-type")) {

        const oldParagraphs = document.getElementsByClassName("drink-type")

        for (let index = oldParagraphs.length - 1; index >= 0; index--) {
          oldParagraphs[index].remove()

        }

      }

      for (let drink of responseJson.drinks) {
        const drinkType = document.createElement('p');
        drinkType.innerText = drink.strDrink;
        drinkType.classList.add("drink-type")
        listOfDrinks.append(drinkType);
        drinkType.addEventListener('click', () => {
          console.log(drink)
          document.querySelector('.titulo').style.display = 'none'
        })
      }
      console.log(responseJson)
    })

}
const inputQuery = document.getElementById("user-input")
loadMoreBtn.addEventListener('click', () => {
  loadMargaritaInstruction(inputQuery.value);

})

//cada que busque algo se debe borrar la busqueda pasada y solo regresar la que encontro