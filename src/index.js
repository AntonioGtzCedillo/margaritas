import "./style.css"

const fetch = require("isomorphic-fetch");

const listOfDrinks = document.getElementById('busqueda');
const loadMoreBtn = document.getElementById('enviar');
const regresar = document.getElementById('botonMostrar');
regresar.style.display = "none"

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



        drinkType.addEventListener("click", () => {
          //ocultar pagina principal
          console.log(drinkType.innerText)
          document.querySelector(".titulo").style.display = "none"
          document.querySelector(".flex-container").style.display = "none"
          document.querySelector(".busqueda").style.display = "none"
          regresar.style.display = "block"

          console.log(drink, "---")

          //mostrar datos de bebida clickeada
          const imgDeBebida = document.createElement("img")
          imgDeBebida.classList.add("oldImage")
          const infoBebidaDiv = document.getElementById("infoBebidaDiv")
          imgDeBebida.setAttribute("src", drink.strDrinkThumb)

          if (document.getElementsByClassName("oldImage")) {

            const oldImage = document.getElementsByClassName("oldImage")
            
            for (let index = oldImage.length - 1; index >= 0; index--) {
              oldImage[index].remove()
          
            }
          }

        if (document.getElementsByClassName("oldParagraph")) {

          const oldParagraph = document.getElementsByClassName("oldParagraph")
          
          for (let index = oldParagraph.length - 1; index >= 0; index--) {
            oldParagraph[index].remove()
        
          }
        }

          infoBebidaDiv.append(imgDeBebida);
//mostar informacion de mi array de objetos
          const infomacionBebida = document.createElement("p")
          infomacionBebida.classList.add("oldParagraph")
          infomacionBebida.innerText = drink.strInstructions
          infoBebidaDiv.append(infomacionBebida);


        })


        regresar.addEventListener("click", () => {
          // regresar a vista original (lista de bebidas)
          document.querySelector(".titulo").style.display = "block"
          document.querySelector(".flex-container").style.display = "flex"
          document.querySelector(".busqueda").style.display = "block"
          regresar.style.display = "none"
          document.querySelector(".oldImage").style.display = "none"
          document.querySelector(".oldParagraph").style.display = "none"

        })



      }
      console.log(responseJson)
    })

}
const inputQuery = document.getElementById("user-input")
loadMoreBtn.addEventListener('click', () => {
  loadMargaritaInstruction(inputQuery.value);

 
})



// const infomacionBebida = document.createElement("p")
// const infoBebidaDiv = document.getElementById("infoBebidaDiv")
// infomacionBebida.setAttribute("src", drink.strInstructions)
// infoBebidaDiv.append(infomacionBebida);