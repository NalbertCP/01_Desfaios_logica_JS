// programa que lê um caractere e uma frase, ambos como entrada de dados e retorna
// a quantidade de vezes que a aquele caractere apareceu na frase
const prompt = require("prompt-sync")({sigint: true})
let cont = 0

const letra = prompt("Digite um caractere: ").toUpperCase() // ler o caractere e padroniza-lo
console.log()                                               // e para maíscula

const texto = prompt("Agora digite uma frase: ").toUpperCase() // ler a frase e padroniza-la para
console.log()                                                  // maiúscula

for (let i=0; i<=texto.length;i++){
    if (texto.charAt(i)==letra){
        cont = cont+1
    }
}

console.log(`Quantidade de (${letra}) na frase = ${cont}`)






