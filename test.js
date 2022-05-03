
// importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


// comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });


//-------------------------------------------------------------------
//prueba fromDollarToYen
test('de dollar a yen, resultado 6', () => {
    let resultado = fromDollarToYen(5);
    expect(resultado).toBe(6);  
});

//prueba fromEuroToDollar
test('de eros a dollares,resulatdo 9048.4', () => {
    let resultado = fromEuroToDollar(10);
    expect(resultado).toBe(9048.4);
});

//prueba fromYenToPround
test('de yen a pround, resulatdo 255.8', () => {
    let resulatdo = fromYenToPound(2);
    expect(resulatdo).toBe(255.8);
});
