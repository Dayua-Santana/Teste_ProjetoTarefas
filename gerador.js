let container = document.querySelector('#container-mensagens')
let button = document.querySelector('#btn-gerar')

contador = 0

function mostrarMsg(){
    let elemento = document.createElement('h1')

    let texto = document.createTextNode(`Essa é a mensagem ${contador}`)

    elemento.appendChild(texto)

    container.appendChild(elemento)

    contador++
}

button.onclick = mostrarMsg