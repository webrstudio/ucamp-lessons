//Acceso a elementos(atributos) de un objeto
const usuario ={
    nombre: 'Ricardo',
    edad: 25,
    genero: 'Masculino'
}

//Acceso por punto
console.log(`Me llamo ${usuario.nombre} y tengo ${usuario.edad} años`)

//Acceso por desestructuración
const {genero, edad, nombre} = usuario
console.log(`Me llamo ${nombre} y tengo ${edad} años`)