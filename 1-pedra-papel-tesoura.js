const prompt = require(`Prompt-sync`)({sigint: true})
let entrada = prompt("Digite as jogadas: ").toUpperCase() //padronização da entrada em letras maiúsculas através do touppercase

let jogx = [], jogy = [] // arrays para armazenar as jogadas dos jogadores x e y
let n = 0, nx = 0, mx = 1 
let contx = 0, conty = 0 // contadores de vitórias dos jogadores x e y

const rodadas = entrada.length/2

//Guardando a jogada de cada jogador em seu respectivo array
while (nx < entrada.length){
    jogx[n] = entrada.charAt(nx)
    jogy[n] = entrada.charAt(mx)
    n++
    nx = nx+2
    mx = mx+2
}

console.log(jogx)
console.log(jogy)

//Teste lógico para saber quem ganhou cada rodada e contagem de vitórias
for (let i=0; i<rodadas; i++){
    if (jogx[i]===jogy[i]){

    } else if (jogx[i]=="P" && jogy[i]=="R"){
        contx = contx +1
    } else if (jogx[i]=="P" && jogy[i]=="S"){
        conty = conty +1
    } else if (jogx[i]=="S" && jogy[i]=="R"){
        conty = conty +1
    } else if (jogx[i]=="S" && jogy[i]=="P"){
        contx = contx +1
    } else if (jogx[i]=="R" && jogy[i]=="P"){
        conty = conty +1
    } else if (jogx[i]=="R" && jogy[i]=="S"){
        contx = contx +1
    }
}

//Saída de dados
if (contx>conty){
    console.log(`O jogador X ganhou a disputa por ${contx} à ${conty}`)
} else if (contx<conty){
    console.log(`O jogador Y ganhou a disputa por ${conty} à ${contx}`)
} else{
    console.log("O jogo empatou")
}

//Alternativa à saída de dados
console.log("O jogador" + (contx>conty? `X ganhou a disputa por ${contx} à ${conty}`:
(contx<conty? `Y ganhou a disputa por ${conty} à ${contx}`:"O jogod empatou"))) 
