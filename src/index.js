import "./style.css"

const fetch = require("isomorphic-fetch");

const listOfDrinks = document.getElementById('busqueda');
const loadMoreBtn = document.getElementById('enviar');
const regresar = document.getElementById('botonMostrar');
const instructionsDiv = document.getElementById('instructions-id');
const ingredientsDiv = document.getElementById('ingredientes-id');
const imagenDiv = document.getElementById('imagenDiv');
regresar.style.display = "none"
instructionsDiv.style.display = "none"
ingredientsDiv.style.display = "none"



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
          imgDeBebida.classList.add("class-old-image")
          imgDeBebida.setAttribute("src", drink.strDrinkThumb)

          if (document.getElementsByClassName("class-old-image")) {

            const oldImage = document.getElementsByClassName("class-old-image")

            for (let index = oldImage.length - 1; index >= 0; index--) {
              oldImage[index].remove()

            }
          }

          if (document.getElementsByClassName("parrafo-instrucciones")) {

            const oldParagraph = document.getElementsByClassName("parrafo-instrucciones")

            for (let index = oldParagraph.length - 1; index >= 0; index--) {
              oldParagraph[index].remove()

            }
          }
          const borrarIngredientes = document.getElementsByClassName("borrar-ingredientes")

          if (borrarIngredientes) {


            for (let index = borrarIngredientes.length - 1; index >= 0; index--) {
              borrarIngredientes[index].remove()

            }
          }          

          //mostar informacion de la bebida seleccionada (instrcciones, imagen = ddp (drink detail page)) 
          const infomacionBebida = document.createElement("p")
          infomacionBebida.classList.add("parrafo-instrucciones")
          infomacionBebida.innerText = drink.strInstructions
          instructionsDiv.append(infomacionBebida);//aqui se agrega a ese div el parrafo creado con INSTRUCTIONS:
          imgDeBebida.setAttribute("id", "imagen-bebida")
          imagenDiv.append(imgDeBebida);
          instructionsDiv.style.display = "block"
          ingredientsDiv.style.display = "block"

          const ingredientes = {
            strIngredient1: drink.strIngredient1,
            strIngredient2: drink.strIngredient2,
            strIngredient3: drink.strIngredient3,
            strIngredient4: drink.strIngredient4,
            strIngredient5: drink.strIngredient5,
            strIngredient6: drink.strIngredient6,
            strIngredient7: drink.strIngredient7,
            strIngredient8: drink.strIngredient8,
            strIngredient9: drink.strIngredient9,
            strIngredient10: drink.strIngredient10,
            strIngredient11: drink.strIngredient11,
            strIngredient12: drink.strIngredient12,
            strIngredient13: drink.strIngredient13,
            strIngredient14: drink.strIngredient14,
            strIngredient15: drink.strIngredient15,
            
          }
//mostrar ingredientes usando operador ternario
          const parrafoIngredientes = `${ingredientes.strIngredient1 !== null ? ingredientes.strIngredient1 + (ingredientes.strIngredient2 !== null ? ", " : ".") : ""}${ingredientes.strIngredient2 !== null ? ingredientes.strIngredient2 + (ingredientes.strIngredient3 !== null ? ", " : ".") : ""}${ingredientes.strIngredient3 !== null ? ingredientes.strIngredient3 + (ingredientes.strIngredient4 !== null ? ", " : ".") : ""}${ingredientes.strIngredient4 !== null ? ingredientes.strIngredient4 + (ingredientes.strIngredient5 !== null ? ", " : ".") : ""}${ingredientes.strIngredient5 !== null ? ingredientes.strIngredient5 + (ingredientes.strIngredient6 !== null ? ", " : ".") : ""}${ingredientes.strIngredient6 !== null ? ingredientes.strIngredient6 + (ingredientes.strIngredient7 !== null ? ", " : ".") : ""}`

          console.log(parrafoIngredientes)
          const parrafoNuevoIngre = document.createElement("p")
          parrafoNuevoIngre.classList.add("borrar-ingredientes")
          parrafoNuevoIngre.innerText = parrafoIngredientes
          ingredientsDiv.append(parrafoNuevoIngre);
          titulo.innerText = drink.strDrink

        })


        regresar.addEventListener("click", () => {
          // regresar a vista original (lista de bebidas)
          document.querySelector(".flex-container").style.display = "flex"
          document.querySelector(".busqueda").style.display = "block"
          regresar.style.display = "none"
          document.querySelector(".class-old-image").style.display = "none"
          document.querySelector(".parrafo-instrucciones").style.display = "none"
          document.querySelector(".borrar-ingredientes").style.display = "none"
          titulo.innerText = "Pollos BAR"
          instructionsDiv.style.display = "none"
          ingredientsDiv.style.display = "none"

          const oldParagraphs = document.getElementsByClassName("drink-type")

          for (let index = oldParagraphs.length - 1; index >= 0; index--) {
            oldParagraphs[index].remove()
  
          }


        })



      }
      console.log(responseJson)
    })

}
const inputQuery = document.getElementById("user-input")
loadMoreBtn.addEventListener('click', () => {
  loadMargaritaInstruction(inputQuery.value);


})


//**validar para que sirve ya que si lo elimino no pasa nada */
