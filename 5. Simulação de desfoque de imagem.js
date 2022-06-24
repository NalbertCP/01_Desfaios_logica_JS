let array = [
    [36,0,18,9,9,45,27], 
    [27,0,54,9,0,63,90], 
    [81,63,72,45,18,27,0], 
    [0,0,9,81,27,18,45], 
    [45,45,27,27,90,81,72], 
    [45,18,9,0,9,18,45], 
    [27,81,36,63,63,72,81]]
let result =[]
for (let z=2; z<array.length;z++){
    result.push([])
}
let arraylin = array.length; let arraycol = array[0].length
let lin = 3; let col = 3
let i = 0; let j = 0
let sum = 0 

while(lin<=arraylin){
    while(col<=arraycol){
        var sub = array.slice(0+i,lin)
        var submatrix = sub.map(sub => sub.slice(0+j,col))
        for(let a =0; a<3; a++){
            for (let b=0; b<3; b++){
                sum = sum + submatrix[a][b]
            }
        }
        result[i][j] = Math.floor(sum/9)
        col++
        j++
        sum = 0 
    }
    lin++
    i++
    col = 3
    j = 0
}
console.log(result)
 
