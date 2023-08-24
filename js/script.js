let lastValue="O";
let display = document.getElementById("display");
display.textContent="Start Game👍";



let buttons = document.querySelectorAll(".box");
for(let button of buttons){
    button.addEventListener("click",() => {
        if (button.textContent !=="") {
            return;
        }
        if(lastValue ==="O") {
            button.textContent ="X";
            lastValue ="X";
            display.textContent="Player 2's turn to play";
            checkStatus();
        } else{
            button.textContent="O"
            lastValue="O";
            display.textContent="Player 1's turn to play";
             checkStatus();
        }
       
    });
}
let Restart=document.querySelector(".button1");

    Restart.addEventListener("click",()=>{
        window.location.href="index.html"
    }
);
