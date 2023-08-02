let mat=[]
mat[0] = "M01"
mat[1] = "M02" 
mat[2] = "M03"
let nomes=["Marcos","Pedro","Maria"]
let notas=[5,6,8]
let situacao

console.log(mat)
console.log(nomes)
console.log("MAT\tNOME\tNOTA\tSITUAÇÃO")
for(let x=0; x<nomes.length; x++){
    if(notas[x]>=5)
    {
        situacao="APROVADO"
    }
    else{
        situacao="REPROVADO"
    }
    console.log(mat[x]+"\t"+nomes[x]+"\t"+notas[x]+"\t"+situacao)
}
// quando se usa vetor se usa o laço "para"(for)