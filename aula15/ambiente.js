let num = [5, 8, 2 , 9, 3]
num[5] = 1
num.push(7)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`E tem ${num.length} posições.`)
console.log(`E o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não for encontrdo')
} else {
    console.log(`O valor está na posição ${pos}`)
}
