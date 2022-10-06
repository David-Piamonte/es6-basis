let colors = require('colors');
const estudiantes1 = ["Valentina", 
                        "Felipe",
                        "mariana"]

const estudiantes2 = [
                        "Vanessa",
                        "Ryan",
                        "Blessd"
                    ]
//operador spread(resto)
const estudiantes3 = [
                        'Kelly',
                        ...estudiantes1,
                        'Melissa',
                        ...estudiantes2
                    ]

//desestructuracion arreglo:

console.log(estudiantes3)


