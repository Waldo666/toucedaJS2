alert ("Hola! vamos  a hacer una lista de productos que hay que comprar en el super");
alert("Vamos a ir agregando elementos a una lista hasta que pongas CANCELAR")
var lista = []
var ingreso;
while (true) {
    ingreso = prompt("Ingresa un producto (o haz clic en Cancelar para terminar):");
    lista.push (ingreso);
    if (ingreso === null) {
        alert("Ingresa a la consola para ver la lista");
        break;
    }
}
console.log("la lista es la siguiente:")
lista.pop(0)
for(i=0;i<lista.length;i++){
console.log(lista[i])
}
console.log("==========================================================")
console.log("En tu lista has incorporado " + lista.length + " elementos")
console.log("Gracias!")
