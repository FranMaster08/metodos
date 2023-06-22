function Saludar(nombre) {
    console.log(nombre);
}
function Jugar(player) {
    console.log(`Usted esta jugando con el player ${player}`);
}

function main(callback) {
    console.log('ejecutando el callback');
    callback('Francisco')
}

main(Jugar)