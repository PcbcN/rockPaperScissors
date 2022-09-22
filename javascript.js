/* Creamos las variables globales con la selección del ordenador, la del jugador y el resultado */
let playerSelection = "";
let playerSelectionInt = 0;
let computerSelection = "";
let computerSelectionInt = 0;
let playerPuntos = 0;
let computerPuntos = 0;


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

/* Estas funciones nos dan las playerSelection sacados del user input */
function piedra() {
    playerSelection = "piedra";
    console.log(playerSelection);
}

function papel() {
    playerSelection = "papel";
    console.log(playerSelection);
}

function tijeras() {
    playerSelection = "tijeras";
    console.log(playerSelection);
}

/* Esta función represta una ronda de juego */
function gameRound() {
    let resultado = "";
    if ((playerSelection == 'piedra' && computerSelection == 'tijeras') || (playerSelection == 'papel' && computerSelection == 'piedra') || (playerSelection == 'tijeras' && computerSelection == 'papel')) {
        resultado = "Ganas";
    } else if ((playerSelection == 'piedra' && computerSelection == 'papel') || (playerSelection == 'papel' && computerSelection == 'tijeras') || (playerSelection == 'tijeras' && computerSelection == 'piedra')) {
        resultado = "pierdes";
    } else {resultado = "Empate";}
    return resultado;
}




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