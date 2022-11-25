
export const returnMainPage = (regresar, titulo, instructionsDiv, ingredientsDiv, flexContainer) => {
    // regresar a vista original (lista de bebidas)
    document.querySelector(".flex-container").style.display = "flex"
    document.querySelector(".busqueda").style.display = "flex"
    regresar.style.display = "none"
    document.querySelector(".class-old-image").style.display = "none"
    document.querySelector(".parrafo-instrucciones").style.display = "none"
    document.querySelector(".borrar-ingredientes").style.display = "none"
    titulo.innerText = "Pollos BAR"
    instructionsDiv.style.display = "none"
    ingredientsDiv.style.display = "none"
    flexContainer.style.display = "none"

    const oldParagraphs = document.getElementsByClassName("drink-type")

    for (let index = oldParagraphs.length - 1; index >= 0; index--) {
      oldParagraphs[index].remove()

    }
  }