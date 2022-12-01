import "./style.css"
import { goToDDP } from './views/goToDDP'
import { returnMainPage } from './views/returnMainPage'

import {
  constants
} from './constants'

const fetch = require("isomorphic-fetch");

const {
  regresar,
  instructionsDiv,
  ingredientsDiv,
  flexContainer,
  loadMoreBtn,
  listOfDrinks,
  titulo,
  errorContainer,
} = constants

regresar.style.display = "none"
instructionsDiv.style.display = "none"
ingredientsDiv.style.display = "none"
flexContainer.style.display = "none"
errorContainer.style.display = "none"

const activateDarkTheme = () => {
  document.querySelector("h1").classList.add("darkLayout")
  document.querySelector("body").classList.add("darkLayout")


}
const disableDarkTheme = () => {
  document.querySelector("h1").classList.remove("darkLayout")
  document.querySelector("body").classList.remove("darkLayout")

}
document.querySelector(".cbox1").addEventListener('change', (event) => {
  if (event.target.checked) {
    activateDarkTheme()
  } else {
    disableDarkTheme()

  }
})

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
// ! = falsy values:null, undefined, 0, "" .

if(!responseJson.drinks){
  errorContainer.style.display = "block"
}
else(
  errorContainer.style.display = "none"
)

      for (let drink of responseJson.drinks) {
        const drinkType = document.createElement('p');
        drinkType.innerText = drink.strDrink;
        drinkType.classList.add("drink-type")
        listOfDrinks.append(drinkType);

        drinkType.addEventListener("click", () => {
          goToDDP(drinkType, drink)
        })
        regresar.addEventListener("click", () => {
          returnMainPage(regresar, titulo, instructionsDiv, ingredientsDiv, flexContainer)

        })

      }
      console.log(responseJson)
    })

}
const inputQuery = document.getElementById("user-input")

loadMoreBtn.addEventListener('click', () => {
  loadMargaritaInstruction(inputQuery.value);
})

