/* Creamos las dos variables globales con la selección del ordenador y la del jugador */
let playerSelection = "";
let playerSelectionInt = 0;
let computerSelection = "";
let computerSelectionInt = 0;

/* Esta función nos da la computerSelection, un número entero del 1 al 3 siempre random */
function getComputerChoice() {
    let computerSelectionInt = Math.floor(Math.random() * 3) + 1;
    if (computerSelectionInt === 1) {
        computerSelection = "piedra";
    } else if (computerSelectionInt === 2) {
        computerSelection = "papel";
    } else if (computerSelectionInt === 3) {
        computerSelection = "tijeras";
    }
    return computerSelectionInt;
}

/* Esta función nos da la playerSelection sacado del prompt */
function getPlayerSelection() {
    playerSelection = prompt ("Por favor, escribe 'piedra', 'papel' o 'tijeras'");
    if (playerSelection == "piedra"){
        playerSelectionInt = 1;
    }
    else if (playerSelection == "papel"){
        playerSelectionInt = 2;
    }
    else if (playerSelection == "tijeras")
    {
        playerSelectionInt = 3;
    }
    return playerSelectionInt;
}

function game(playerSelectionInt, computerSelectionInt) {
    let arr = [playerSelectionInt, computerSelectionInt];
    let resultado = "";
    console.log(arr);
    console.log(resultado);
    if (playerSelectionInt === computerSelectionInt) {resultado = "Empate!";
    } else if (arr = [1,3]) {resultado =  "Has ganado!";
    } else if (arr = [2,1]) {resultado =  "Has ganado!";
    } else if (arr = [3,2]) {resultado =  "Has ganado!";
    } else if (arr = [1,2]) {resultado =  "Has perdido!";
    } else if (arr = [2,3]) {resultado =  "Has perdido!";
    } else if (arr = [3,1]) {resultado =  "Has perdido!";
    } else {resultado = "ups! algo ha ido mal"}
    console.log(resultado);
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