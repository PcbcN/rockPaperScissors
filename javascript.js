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

/* Esta función es la de partida individual */
function rondaJuego(computerSelectionInt, playerSelectionInt) {
    if (computerSelectionInt === playerSelectionInt) {
    return "Es un empate!";}
    
    else if (computerSelectionInt === 1 && playerSelectionInt === 2){ 
        return "tú ganas! Papel gana a piedra";}

        else if (computerSelectionInt === 2 && playerSelectionInt === 1){ 
            return "tú pierdes! Piedra gana a papel";}

            else if (computerSelectionInt === 3 && playerSelectionInt === 1){ 
                return "tú ganas! Piedra gana a tijeras";}

                else if (computerSelectionInt === 1 && playerSelectionInt === 3){ 
                    return "tú pierdes! Tijeras gana a piedra";}

                else if (computerSelectionInt === 3 && playerSelectionInt === 2){ 
                    return "tú pierdes! Tijeras gana a papel";}

                    else if (computerSelectionInt === 2 && playerSelectionInt === 3){ 
                        return "tú Ganas! Tijeras gana a papel";}

                        else {
                            return "Algo no ha funcionado!"}
}

