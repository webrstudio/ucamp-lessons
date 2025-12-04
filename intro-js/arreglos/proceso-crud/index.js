//CRUD con Arreglos y LocalStorage
//Elementos del DOM
const createContentButton = document.getElementById('crearContacto')

//1._Crear mi colección
const contactos = []

console.log(contactos)

//2._Create: utilizando el método push
function createContact(contact /*objeto*/){
    let total = contactos.push(contact)
    console.log(`${total} contacto(s):`)
    console.log(contactos)
}

//Eventos del DOM:
//Create
createContentButton.addEventListener('click', function(){
    //Ejecutar función createContact
    createContact(
        {
            nombre:'Alexis MTZ',
            telefono:7890123,
            correo:'alexis_29@gmail.com',
            direccion:'Av. de las Garndeias, col. Zumpango R, No. 21',
            cp:'55678'
        },
    )
})