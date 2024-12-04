let playerTurn = "cross";
let gridArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let heading = document.querySelector(".heading")

let divs = document.querySelectorAll(".child-div");
console.log(divs);

let turnSwitch = () => {
    playerTurn = playerTurn === "cross" ? playerTurn = "zero" : playerTurn = "cross";
    return playerTurn
}

let headingSwitch = () => {
    heading.textContent = playerTurn === "cross" ? "Player 1" : "Player 2";
}

let resetGame = () => {for (let i = 0; i < gridArr.length; i++) {
    if (gridArr[i] === "zero" || gridArr[i] === "cross"){
        gridArr[i] = 0;
    }

    for (let i=0; i<divs.length; i++){
        divs[i].innerHTML = '';
    }

    playerTurn = "cross";
    heading.textContent = "Player 1";
}}

let winCheck = () => {
    if (gridArr[0] === gridArr[1] && gridArr[1] === gridArr[2] && gridArr[0] !== 0 || gridArr[3] === gridArr[4] && gridArr[4] === gridArr[5] && gridArr[4] !== 0 || gridArr[6] === gridArr[7] && gridArr[7] === gridArr[8] && gridArr[7] !== 0 || gridArr[0] === gridArr[3] && gridArr[3] === gridArr[6] && gridArr[3] !== 0 || gridArr[1] === gridArr[4] && gridArr[4] === gridArr[7] && gridArr[4] !== 0 || gridArr[3] === gridArr[5] && gridArr[3] === gridArr[8] && gridArr[3] !== 0 || gridArr[0] === gridArr[4] && gridArr[4] === gridArr[8] && gridArr[4] !== 0|| gridArr[2] === gridArr[4] && gridArr[4] === gridArr[6]&& gridArr[4] !== 0){
    if (playerTurn === "cross"){
        alert("player 2 won the game");
        for (let i = 0; i < gridArr.length; i++) {
            if (gridArr[i] === "zero" || gridArr[i] === "cross"){
                gridArr[i] = 0;
            }
    
        for (let i=0; i<divs.length; i++){
            divs[i].innerHTML = '';
        }
            playerTurn = "cross";
            heading.textContent = "Player 1";
        }
    } else {
        alert("player 1 won the game");
        for (let i = 0; i < gridArr.length; i++) {
            if (gridArr[i] === "zero" || gridArr[i] === "cross"){
                gridArr[i] = 0;
            }
    
            for (let i=0; i<divs.length; i++){
                divs[i].innerHTML = '';
            }

            playerTurn = "cross";
            heading.textContent = "Player 1";
        }
    }
}}

let drawCheck = () => {
if (gridArr[0] !== 0 && gridArr[1] !== 0 && gridArr[2] !== 0 && gridArr[3] !== 0 && gridArr[4] !== 0 && gridArr[5] !== 0 && gridArr[6] !== 0 && gridArr[7] !== 0 && gridArr[8] !== 0) {
    alert("game ends as a draw");
    for (let i = 0; i < gridArr.length; i++) {
        if (gridArr[i] === "zero" || gridArr[i] === "cross"){
            gridArr[i] = 0;
        }

        for (let i=0; i<divs.length; i++){
            divs[i].innerHTML = '';
        }

        playerTurn = "cross";
        heading.textContent = "Player 1";
}
}
}

divs.forEach((div, i)=>{
        div.addEventListener("click", () =>{
        if (gridArr[i] === 0){
         if (playerTurn === "cross"){
            div.innerHTML = '<i class="fa-solid fa-xmark" id="cross"></i>';
            gridArr[i] = "cross";
        } else{
            div.innerHTML = '<i class="fa-solid fa-0" id="zero"></i>';
            gridArr[i] = "zero";
        }
        turnSwitch();
        headingSwitch();
        setTimeout(winCheck, 100);
        setTimeout(drawCheck, 100);
      }
    });
 })

