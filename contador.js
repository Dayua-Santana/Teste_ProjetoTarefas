let valorElement = document.querySelector('#valor')
let buttonElement = document.querySelector('#btn-clique')

contador = 0

function vidaContador(){
    contador = contador + 1

    valorElement.innerHTML = contador
}

buttonElement.onclick = vidaContador

