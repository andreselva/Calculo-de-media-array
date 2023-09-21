const notasJS = [10, 9, 8];
const notasJava = [9, 8.2, 7];
const notasPython = [7, 8.9, 9.2]
const notasUnificadas = [notasJS, notasJava, notasPython];

const medias = []

notasUnificadas.forEach(notasUni => {
    const media = calculaMedia(notasUni);
    medias.push(media)
})

function calculaMedia(nota) {
    const soma = nota.reduce((acc, nota) => acc + nota, 0);
    const media = soma / nota.length;
    console.log(media)
    return media
}

console.log(medias)

// function calculaMedia(nota) {
//     const soma = nota.reduce((acc, nota) => acc + nota, 0)
//     return soma / nota.length
// }

// const medias = notasUnificadas.map(calculaMedia)
// console.log(medias)
