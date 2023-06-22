const datos = ['dato1', 'dato2', 'dato3']
// for (let i = 0; i < datos.length; i++) {
//     const element = datos[i];
//     console.log(element);
// }

// forEach
// datos.forEach(function (item) {
//     console.log(item);
// })

// map
const datos2 = ['dato1', 'dato2', 'dato3']
const datos3 = datos2.map(function (item) {
    return item.toUpperCase();
})
console.log(datos3);

// filter
const datos4 = ['dato1', 'dato2', 'dato3']
const datos5 = datos4.filter(function (item) {
    return item !== 'dato1';
})
console.log(datos5);

// reduce
const datos6 = ['dato1', 'dato2', 'dato3']
const suma = datos6.reduce(function (valorAcumulado, nuevoElemento) {
    return [...valorAcumulado, nuevoElemento]
}, [])
console.log(suma);
