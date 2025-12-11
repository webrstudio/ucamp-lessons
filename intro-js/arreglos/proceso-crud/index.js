//CRUD con Arreglos y LocalStorage
//Elementos del DOM
const contactList = document.getElementById("listaContactos");
const createContentButton = document.getElementById("crearContacto");
const updateContentButton = document.getElementById('actualizarContacto');

//1._Crear mi colección
const contactos = [
  {
    nombre: "Alexis MTZ",
    telefono: 7890123,
    correo: "alexis_29@gmail.com",
    direccion: "Av. de las Garndeias, col. Zumpango R, No. 21",
    cp: "55678",
  },
];

console.log(contactos)

//2._Create: utilizando el método push
function createContact(contact /*objeto*/) {
  let total = contactos.push(contact);
  console.log(`${total} contacto(s):`);
  console.log(contactos);
}

//Read
function readContent() {
  contactos.map(function (contacto) {
    const { nombre, telefono } = contacto;
    return (contactList.innerHTML += `<li>${nombre} - ${telefono}</li>`);
  });
}
readContent();

//Update
function updateContent() {
  contactos.splice(0, 1, {
    nombre: "Ricardo Guevara",
    telefono: 4567880,
    correo: "ricardo_12@gmail.com",
    direccion: "Av. de las flores, col. Jorge Torres, No. 22",
    cp: "55900",
  });
  return console.log(contactos)
}

//Eventos del DOM:
//Create
createContentButton.addEventListener("click", function () {
  //Ejecutar función createContact
  createContact({
    nombre: "Alexis MTZ",
    telefono: 7890123,
    correo: "alexis_29@gmail.com",
    direccion: "Av. de las Garndeias, col. Zumpango R, No. 21",
    cp: "55678",
  });
});

//Update
updateContentButton.addEventListener('click', function(){
    updateContent()
})