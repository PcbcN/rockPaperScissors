/* Creamos las variables globales con la selección del ordenador, la del jugador y el resultado */
let playerSelection = "";
let computerSelection = "";
let computerSelectionInt = 0;
let playerPuntos = 0;
let computerPuntos = 0;

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
    let resultado = "";
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

        if(playerPuntos == 5 || computerPuntos == 5) {
            alert ("Juego terminado!")
        } else {
        getComputerChoice();
        gameRound();
        console.log(playerPuntos);
        console.log(computerPuntos);
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