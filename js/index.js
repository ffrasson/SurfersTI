//inicio del código
// declaramos las variables de los precios
let valorUno = 10000;
let valorDos = 20000;
let valorTres = 30000;

let nombreUsuario = prompt('Ingrese su nombre de usuario: '); // El usuario ingresa su nombre
alert(`Hola ${nombreUsuario.toUpperCase()} Bienvenido/a a SurfersTI, este es nuestro sistema de alquiler de MotorHomes - LocoCamperAr`); // mensaje de bienvenida

// Listas
class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
    }
}

function registroUsuarios() {
    let numeroUsuarios = parseInt(prompt('Ingrese el número de usuarios que desea registrar'));
    let usuarios = [];
    for (let i = 0; i < numeroUsuarios; i++) {
        let nombre = prompt('Ingrese su nombre');
        let apellido = prompt('Ingrese su apellido');
        let edad = parseInt(prompt('Ingrese su edad'));
        let usuario = new Usuario(nombre, apellido, edad);
        usuarios.push(usuario);
    }
    return usuarios;
}

function usuariosRegistrados(usuarios) {
    for (const usuario of usuarios) {
        console.log(usuario);
        alert(`Nombre: ${usuario.nombre} \n Apellido: ${usuario.apellido} \n Edad: ${usuario.edad}`);
    }
}

function principal() {
    let usuarios = registroUsuarios();
    usuariosRegistrados(usuarios);
}

// funciones

function camperUno(adultos, niños){ // cotizamos modelo UNO de Motorhome
    let total = adultos + niños;
        if (adultos <= 0 && niños !== 0){
            alert('No se puede alquilar un Motorhome sin adultos');
        }
        else if (total > 6){
            /* Una alerta que se activa cuando el número de personas supera las 6. */
            alert('Excede el límite de personas para este modelo de camper (6 personas), contrate el modelo DOS o TRES si desea más capacidad');
        }
        else if (total <= 6){ // si el usuario ingresa un número que está entre 1 y 6
            alert(`El total a pagar es: $${valorUno}`);
        }
        else (total <= 6)
            {principal();} 
        
    return total;
}

function camperDos(adultos, niños){ // cotizamos modelo DOS de Motorhome
    let total = adultos + niños;
        if (adultos <= 0 && niños !== 0){
            alert('No se puede alquilar un MotorHome sin adultos');
        }
        else if (total > 12){
            /* Una alerta que se activa cuando el número de personas supera las 12. */
            alert('Excede el límite de personas máximo para este modelo de camper, contrate el modelo TRES si desea mayor capacidad');
        }
        else if (total <= 12){ // si el usuario ingresa un número que está entre 1 y 6 independientemente de la cantidad de personas que puede arrendar
            alert(`El total a pagar es: $${valorDos}`);
        }
        else (total <= 12)
            {principal();} 
    return total;
}

function camperTres(adultos, niños){ // cotizamos modelo TRES de Motorhome
    let total = adultos + niños;
        if (adultos <= 0 && niños !== 0){
            alert('No se puede alquilar un MotorHome sin adultos');
        }
        else if (total > 18){
            /* Una alerta que se activa cuando el número de personas supera las 12. */
            alert('Excede el limite de personas máximo de los modelos de camper disponibles, si son mas personas por favor dirigirse a la sección Contacto o bien escribirnos vía correo electrónico a lococamper@gmail.com. Muchas gracias');
        }
        else if (total <= 18){ // si el usuario ingresa un número que está entre 1 y 6 independientemente de la cantidad de personas que puede arrendar
            alert(`El total a pagar es: $${valorTres}`);
        }
        else (total <= 18)
            {principal();} 
    return total;
}

function muestraTotal(total){ //muestra el total de personas
    if (total <= 7 || total <= 19){
        alert(`El total de personas ingresadas es : ${total}`);
    }
}

function muestraMenu(_menu){ // muestra el menú principal del programa
    let opciones = prompt(`Estimado/a ${nombreUsuario.toUpperCase()}, elija la opción que desea.\n \n 1. Modelo UNO de Motorhome (hasta 6 personas) \n 2. Modelo DOS de Motorhome (hasta 12 personas) \n 3. Modelo TRES de Motorhome (hasta 18 personas) \n \n Escriba (EXIT) para salir`);
    return opciones;
}

function alquiler(){ //cotizamos el alquiler de los modelos de Motorhome que se muestra por menú
    let opcionSeleccionada = muestraMenu(); 
    while(opcionSeleccionada !== 'EXIT'){
        if(!isNaN(opcionSeleccionada !== '')){
            let adultos = parseInt(prompt('Ingrese el número de adultos'));
            let niños = parseInt(prompt('Ingrese el número de niños'));
                opcionSeleccionada = parseInt(opcionSeleccionada);
                 //Switch seleccionar la opción
                
                switch(opcionSeleccionada){
                    case 1: // Modelo UNO de Motorhome
                        let totalUno = camperUno(adultos, niños); // solicitamos el número de adultos y niños
                        muestraTotal(totalUno); // mostramos el total de personas
                        break;
                    case 2: // Modelo DOS de Motorhome
                        let totalDos = camperDos(adultos, niños); // solicitamos el número de adultos y niños
                        muestraTotal(totalDos); // mostramos el total de personas
                        break;
                    case 3: // Modelo TRES de Motorhome
                        let totalTres = camperTres(adultos, niños); // solicitamos el número de adultos y niños
                        muestraTotal(totalTres); // mostramos el total de personas
                        break;
                    default:
                        alert('Ingrese la opción 1, 2 o 3 para continuar');
                        break;
                }
        }else{ // si el usuario ingresa un número que no está entre 1,2 o 3
            alert('Opción no válida');
        }
        opcionSeleccionada = muestraMenu();   
    }
}
/* Llamando a la función principal. */
alquiler();