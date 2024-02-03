let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados= [];
let numeroMaximo = 10;

    console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   }else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número Secreto es menor');
        }else{
            asignarTextoElemento('p','El número Secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
    }return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
  
}

function generarNumeroSecreto() {
   let NumeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
     console.log(NumeroGenerado);
    console.log(ListaNumerosSorteados);
   
   //Si ya sorteamos todos los números
   if (ListaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else {
        //Si el número está en la lista hacer operación
        if (ListaNumerosSorteados.includes(NumeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            ListaNumerosSorteados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}
function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indicar un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    CondicionesIniciales();
    //Deshabilitar el botón de inicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
     
}
CondicionesIniciales();