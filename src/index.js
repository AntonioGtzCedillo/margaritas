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

        const titulo = document.querySelector(".bar")


        drinkType.addEventListener("click", () => {
          //ocultar pagina principal
          console.log(drinkType.innerText)
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
          if (document.getElementsByClassName("borrarIngredientes")) {

            const borrarIngredientes = document.getElementsByClassName("borrarIngredientes")

            for (let index = borrarIngredientes.length - 1; index >= 0; index--) {
              borrarIngredientes[index].remove()

            }
          }

          infoBebidaDiv.append(imgDeBebida);
          //mostar informacion de la bebida seleccionada (instrcciones, imagen = ddp (drink detail page)) 
          const infomacionBebida = document.createElement("p")
          infomacionBebida.classList.add("oldParagraph")
          infomacionBebida.innerText = drink.strInstructions
          infoBebidaDiv.append(infomacionBebida);
          imgDeBebida.setAttribute("id", "imagen-bebida")
          detallesBebida.append(imgDeBebida);

          const parrafoVacio = document.createElement("br")
          infoBebidaDiv.append(parrafoVacio)


          const ingredientes = {
            strIngredient1: "Galliano",
            strIngredient2: "Ginger ale",
            strIngredient3: "Ice",
            strIngredient4: null,
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null
          }
//mostrar ingredientes usando operador ternario
          const parrafoIngredientes = `ingredientes: 
          ${ingredientes.strIngredient1 !== null ? ingredientes.strIngredient1 + (ingredientes.strIngredient2 !== null ? ", " : ".") : ""}
          ${ingredientes.strIngredient2 !== null ? ingredientes.strIngredient2 + (ingredientes.strIngredient3 !== null ? ", " : ".") : ""}
          ${ingredientes.strIngredient3 !== null ? ingredientes.strIngredient3 + (ingredientes.strIngredient4 !== null ? ", " : ".") : ""}
          ${ingredientes.strIngredient4 !== null ? ingredientes.strIngredient4 + (ingredientes.strIngredient5 !== null ? ", " : ".") : ""}
          ${ingredientes.strIngredient5 !== null ? ingredientes.strIngredient5 + (ingredientes.strIngredient6 !== null ? ", " : ".") : ""}
          ${ingredientes.strIngredient6 !== null ? ingredientes.strIngredient6 + (ingredientes.strIngredient7 !== null ? ", " : ".") : ""}`

          console.log(parrafoIngredientes)
          const parrafoNuevoIngre = document.createElement("p")
          parrafoNuevoIngre.classList.add("borrarIngredientes")
          parrafoNuevoIngre.innerText = parrafoIngredientes
          infoBebidaDiv.append(parrafoNuevoIngre);

          imgDeBebida.setAttribute("id", "imagen-bebida")
          infoBebidaDiv.append(imgDeBebida);
          titulo.innerText = drink.strDrink

        })


        regresar.addEventListener("click", () => {
          // regresar a vista original (lista de bebidas)
          document.querySelector(".flex-container").style.display = "flex"
          document.querySelector(".busqueda").style.display = "block"
          regresar.style.display = "none"
          document.querySelector(".oldImage").style.display = "none"
          document.querySelector(".oldParagraph").style.display = "none"
          document.querySelector(".borrarIngredientes").style.display = "none"
          titulo.innerText = "Pollos BAR"

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