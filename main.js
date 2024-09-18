//Cadena de caracteres usada
//'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//Cadena de símbolos usada
//'!@#$%^&*()-_'

//var cantidad = 8; prueba inicial

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const cadenaSimbolo = '!@#$%^&*()-_';
const cadenaCompleta = cadenaCaracteres + cadenaSimbolo;

function generar() {

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor que 8");
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCompleta[Math.floor(Math.random() * cadenaCompleta.length)];
        //console.log(caracterAleatorio);

        password += caracterAleatorio;
    }
    contrasena.value = password;
    validar(password);
}

function validar(password) {
    const Numero = /\d/;
    const Mayuscula = /[A-Z]/;

    if (!Numero.test(password) || !Mayuscula.test(password)) {
        mensaje.textContent = "La Contraseña es débil.";
        mensaje.style.color = 'red';

    } else {
        mensaje.textContent = "La contraseña es fuerte.";
        mensaje.style.color = 'white';

    }
}


function limpiar() {
    document.getElementById('cantidad').value = '';
    document.getElementById('contrasena').value = '';
    mensaje.textContent = '';
}

document.getElementById('limpiar').addEventListener('click', limpiar);