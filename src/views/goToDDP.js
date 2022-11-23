import { 
  constants
 } from '../constants'

const { 
  regresar,
  instructionsDiv,
  imagenDiv,
  ingredientsDiv,
  flexContainer,
  titulo,
 } = constants

export const goToDDP = (drinkType, drink) => {
  
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
  // document.querySelector(".cbox1").addEventListener('change', (event) => {
  //   if (event.target.checked) {
  //     document.getElementById("infoBebidaDiv").style.border = "4px solid greenyellow";
  //     document.querySelector(".flex-container-ddp").style.border = "4px solid rgb(255, 34, 0)";
  //     document.querySelector(".flex-container").style.border = "2px solid rgb(0, 34, 255)";
  //     document.getElementById("user-input").style.border = "4px solid rgb(0, 255, 204)";
  //   } else {
  //     document.getElementById("infoBebidaDiv").style.border = "none";
  //     document.querySelector(".flex-container-ddp").style.border = "none";
  //     document.querySelector(".flex-container").style.border = "none";
  //   }
  // })



  //mostar informacion de la bebida seleccionada (instrcciones, imagen = ddp (drink detail page)) 
  const infomacionBebida = document.createElement("p")
  infomacionBebida.classList.add("parrafo-instrucciones")
  infomacionBebida.innerText = drink.strInstructions
  instructionsDiv.append(infomacionBebida);//aqui se agrega a ese div el parrafo creado con INSTRUCTIONS:
  imgDeBebida.setAttribute("id", "imagen-bebida")
  imagenDiv.append(imgDeBebida);
  instructionsDiv.style.display = "block"
  ingredientsDiv.style.display = "block"
  flexContainer.style.display = "flex"

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
}