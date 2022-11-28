import { 
  constants
 } from '../constants'

 import { infoDdp } from './infoDdp'

const { 
  regresar,
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
  infoDdp(drink, imgDeBebida)
}

