const prompt = require("prompt-sync")({sigint: true})

let objeto = {
    nome: prompt("Digite o nome: "),
    sobrenome: prompt("Digite o sobrenome: "),
    idade: Number(prompt("Digite a idade: "))
}


function deletenull (objeto){
    if (objeto.nome === "") {
        delete (objeto.nome)
        console.log(objeto)
    } else if (objeto.sobrenome === "") {
        delete (objeto.sobrenome)
        console.log(objeto)
    } else if (objeto.idade ===""){
        delete (objeto.idade)
        console.log(objeto)
    } else {
        console.log("Nada a deletar")
        console.loh(objeto)
    }
}

console.log(deletenull(objeto))
