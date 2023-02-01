const prompt = require("prompt-sync")({sigint: true})

let linha = ""
let coluna = ""

const moldura = {
    itens: Number(prompt("Digite a quntidade de intes na linha: ")),
    col: Number(prompt("Digite a quntidade de colunas "))
}

//criação das linhas tipo (+----+) e (-     -)
for (let i=1; i<=moldura.itens; i++){
    if (i === 1 || i === moldura.itens) {
        linha = linha + "+"
        coluna = coluna + "|"
    } else {
        linha = linha + "-"
        coluna = coluna +" "
    } 
}

//impressão das colunas da moldura
console.log(linha)
if (moldura.col>0) {
    for (let i=1; i<=moldura.col; i++){
        console.log(coluna)
    }
}
console.log(linha) 
