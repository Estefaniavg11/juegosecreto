let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);

    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ( "p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // EL USUARIO NO ACERTO
        if(numeroDeUsuario> numeroSecreto) {
            asignarTextoElemento ("p", " El numero secreto es menor");
        } else {
            asignarTextoElemento ("p", " El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja() {
    let valorcaja = document.querySelector("#ValorUsuario").value= "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }else{
        // si el numero generado esta inculido en la lista se realiza operacion 
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto ();
        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

    } 
}


function CondicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`Indica un numero de 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //Limpar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Gnerar el numero aleatorio 
    //Inicializar el numero de intentos 
    CondicionesIniciales ();
    //Desahabilitar el boto de nuevo juego    
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

CondicionesIniciales();