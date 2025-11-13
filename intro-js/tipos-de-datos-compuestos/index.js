//Tipos de datos compuestos - contienen 2 o más tipos de datos
//1._ Arreglos: Son colecciones de elementos
let nombres = new Array("Ricardo", 'Agustin', 'Todo') //Colección de cadenas de texto
//Primitivo
let nombre = "Ricardo" //un solo string o una sola cadena de texto

//2._Objetos: Son colecciones de datos de un solo elemento
const ricardo = {
    nombre : 'Ricardo', //Atributo nombre
    edad: 25,
    premium: false,
    genero: 'Hombre'
}
const agustin = {
    nombre : 'Agustin', //Atributo nombre
    edad: 25,
    premium: true,
    genero: 'Hombre'
}
const todo = {
    nombre : 'Todo', //Atributo nombre
    edad: 25,
    premium: false,
    genero: 'Hombre'
}

//Arreglo de usuarios
const usuarios = new Array(ricardo, agustin, todo) //Colección de objetos