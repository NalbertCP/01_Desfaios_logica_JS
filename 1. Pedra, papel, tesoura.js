const entrada = 'SRRSPSRPPRSSSR'
let jogx = []
let jogy = []
let n = 0
let nx = 0 
let mx = 1
let contx = 0
let conty = 0 

const jogadas = entrada.length/2

while (nx < entrada.length){
    jogx[n] = entrada.charAt(nx)
    jogy[n] = entrada.charAt(mx)
    n++
    nx = nx+2
    mx = mx+2
}

console.log(jogx)
console.log(jogy)

for (let i=0; i<jogadas; i++){
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

if (contx>conty){
    console.log(`O jogador X ganhou a disputa por ${contx} à ${conty}`)
} else if (contx<conty){
    console.log(`O jogador Y ganhou a disputa por ${conty} à ${contx}`)
} else{
    console.log("O jogo empatou")
}