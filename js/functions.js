//this function is used to check if the game is won
function checkIfGameIWon(first,second,third){
    if(display.textContent.includes("won the game")){
        return;
    }
    if(
    buttons[first],textContent === "X" &&
    buttons[second],textContent === "X" &&
    buttons[third],textContent === "X"
    )
    {
        disableButtonsWheGameIsWon("Player 1");
        return;
    }
    else if(
        buttons[first],textContent === "O" &&
        buttons[second],textContent === "O" &&
        buttons[third],textContent === "O" 
    ){
    disableButtonsWheGameIsWon("Player 2")
    return;}
    // else{checkDraw()}
}
function disableButtonsWheGameIsWon(Player){
    for(let button of buttons){
        if (button.textContent===""){
            button.toggleAttribute('disabled')
        }
    }
    display.textContent=Player +"won the game"
}