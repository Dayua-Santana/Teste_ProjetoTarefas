let listaCompras = ['Pão','Manteiga']

function addTodo(todo){
    listaCompras.push(todo)
}

function exibir(){
    console.log('--- Lista de Tarefas ---');
    
    listaCompras.map((item)=>{
        console.log(item);
    })

    console.log('-------------------');
    
}

addTodo('Ovos')
addTodo('Açucar')
addTodo('Farinha de Trigo')

exibir()