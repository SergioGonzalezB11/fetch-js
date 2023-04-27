const aprobar = true;
//Creamos la promesa
const promesa = new Promise((resuelta, rechazada) => {
setTimeout(() => {
    if (aprobar) {
        resuelta(); //resolver
    } else {
        rechazada(); //rechazar
    }
    }, 2000);
});
//Estados de la promesa
promesa
.then(() => console.log("La promesa se cumplió"))
.catch(() => console.log("La promesa no se cumplió"))
.finally(() => console.log("La promesa finalizó"))