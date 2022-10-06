function imprimir  ( c ) {
    console.log(c)
}
//callback:funcion a ejecutar dentro de sumar 
function sumar(a , b , ){
    let suma = a + b
    imprimir(suma)
}
let resultado=0;
//ejecutar: llamar a suma
sumar(7, 8 ,imprimir(resultado))