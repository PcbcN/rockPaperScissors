/* Creamos las variables globales con la selección del ordenador, la del jugador y el resultado */
let playerSelection = "";
let computerSelection = "";
let computerSelectionInt = 0;
let playerPuntos = 0;
let computerPuntos = 0;
let resultado = "";

/* Variables fijas con elementos del DOM que vamos a utilizar*/
const boton1 = document.querySelector('div[value="piedra"]');
const boton2 = document.querySelector('div[value="papel"]');
const boton3 = document.querySelector('div[value="tijeras"]');
const juego = document.querySelectorAll(".boton");

/* Estas funciones nos dan las playerSelection sacados del user input */
boton1.addEventListener("click", () => playerSelection = "piedra");
boton2.addEventListener("click", () => playerSelection = "papel");
boton3.addEventListener("click", () => playerSelection = "tijeras");


/* Esta función nos da la computerSelection, un número entero del 1 al 3 siempre random */
function getComputerChoice() {
    computerSelectionInt = Math.floor(Math.random() * 3 + 1);
    if (computerSelectionInt === 1) {
        computerSelection = "piedra";
    } else if (computerSelectionInt === 2) {
        computerSelection = "papel";
    } else if (computerSelectionInt === 3) {
        computerSelection = "tijeras";
    }
    return computerSelection;
}

/* Esta función represta una ronda de juego */
function gameRound(a, b) {
    a = playerSelection;
    b = computerSelection;
   
    if ((playerSelection == 'piedra' && computerSelection == 'tijeras') || 
        (playerSelection == 'papel' && computerSelection == 'piedra') || 
        (playerSelection == 'tijeras' && computerSelection == 'papel')) {
            playerPuntos += 1;
            resultado = "Ganas";} 
    else if (playerSelection === computerSelection) { 
            resultado = "Empate!";} 
    else {
        computerPuntos += 1;
        resultado = "Pierdes";}
    return resultado;
}

/* Este es el juego*/
    juego.forEach(juego =>{juego.addEventListener("click", function () {
        let textoUsuario = "";
        if(playerPuntos == 5) {
            document.getElementById("outputJuego").innerHTML = "HAS GANADO! <br> Has llegado primero a " + playerPuntos;}
            else if (computerPuntos == 5) {
                document.getElementById("outputJuego").innerHTML = "JA JA JA! He ganado! <br> He llegado primero a " + computerPuntos;
        } else {
        getComputerChoice();
        gameRound();

        if(resultado == "Ganas") {
            document.getElementById("outputJuego").innerHTML = "Felicidades! Tú " + resultado + "<br> tú llevas " + playerPuntos + " y yo " + computerPuntos;}
            else if (resultado == "Empate!"){document.getElementById("outputJuego").innerHTML = "Es un empate! Qué emoción";}
                else {document.getElementById("outputJuego").innerHTML = "Lástima! Tú " + resultado + "<br> tú llevas " + playerPuntos + " y yo " + computerPuntos;}
        }})
        
        ;})




/*
HAS GANADO!
[1,3] piedra gana tijeras
[2,1] papel gana piedra
[3,2] tijeras gana papel

HAS PERDIDO!
[1,2] piedra pierde con papel
[2,3] papel pierde con tijeras
[3,1] tijeras pierden con piedra

EMPATE!
[1,1] ambos habéis escogido piedra!
[2,2] ambos habéis escogido papel!
[3,3] ambos habéis escogido tijeras!
*/