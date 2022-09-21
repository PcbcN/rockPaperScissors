/* Creamos las dos variables globales con la selección del ordenador y la del jugador */
let computerSelection = "";
let playerSelection = "";

/* Esta función nos da la computerSelection, un número entero del 1 al 3 siempre random */
function getComputerChoice() {
    let numTemp = Math.floor(Math.random() * 3) + 1;
    if (numTemp === 1) {
        computerSelection = "piedra";
    } else if (numTemp === 2) {
        computerSelection = "papel";
    } else if (numTemp === 3) {
        computerSelection = "tijeras";
    }
    return computerSelection;
}

/* Esta función nos da la playerSelection sacado del prompt */
function getPlayerSelection() {
    playerSelection = prompt ("Por favor, escribe 'piedra', 'papel' o 'tijeras'");
    return playerSelection;
}

/* Esta función es la de partida individual */

