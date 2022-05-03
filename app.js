// // esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };



//funcionalidades

//fromDollarToYen--------------------------------------------
const fromDollarToYen= (cantidadDeYenes) => {
    let dollarValue = 1.2
    let operatoria = dollarValue * cantidadDeYenes
    return operatoria
}
console.log(fromDollarToYen(5));

//fromEuroToDollar-----------------------------------------
const fromEuroToDollar = (cantidadDeEuros) => {
    let euroValue = 904.84 
    let operatoria = euroValue * cantidadDeEuros
    return operatoria
}
//console.log(fromEuroToDollar(10));

//fromYenToPound------------------------------------------
const fromYenToPound= (cantidadDePound) => {
    let yenValue = 127.9
    let operatoria = yenValue * cantidadDePound
    return operatoria
}
//console.log(fromYenToPound(2));
module.exports = { fromYenToPound,fromDollarToYen, fromEuroToDollar };