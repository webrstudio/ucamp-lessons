//Arreglos
//Arreglo: colección de elementos
//Crear un arreglo en JS: new Array() y []

const nombres = ['Ricardo', 'Ernesto', 'David'] //Cada elemento tiene un índice que parte desde el número 0

//Acceder a un elemento por índice
console.log(`Mi nombre es ${nombres[2]}`)

//Acceso por desestructuracion
const [ricardo, ernesto, david] = nombres

console.log(`Mi nombre es ${david}`)
