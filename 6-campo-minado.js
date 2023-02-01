const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
]

function solution(matrix) {
    let result = []
    let cont = 0

    for (let x=0; x<matrix.length; x++){
        result.push([])
    }

    for (let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if (i<1){
                var sub = matrix.slice(i,i+2)
            } else {
                var sub = matrix.slice((i-1),(i+2))
            }
            
            if (j<1){
                var submatrix = sub.map(sub => sub.slice(j,(j+2)))
            } else{
                var submatrix = sub.map(sub => sub.slice((j-1),(j+2)))
            }

            for (let a=0; a<submatrix.length; a++){
                for (let b=0; b<submatrix[0].length; b++){
                    if (submatrix[a][b] === true){
                        cont++
                    }
                }
            }
            
            if (matrix[i][j] === true){
                cont--
            }
            result[i][j] = cont  
            cont = 0
        }
    }
    return result
}

console.table(solution(matrix))
