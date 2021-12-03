const button = document.getElementById("button")
const scoreBox = document.getElementsByClassName("score")
const diceImg = document.getElementById("diceImg")
const message = document.getElementsByClassName("message")
const newGame = document.getElementById("newGame")
const main = document.getElementById("main")
const hold = document.getElementById("hold")


let score = [
    ,
]

let playerChange = () => {
    message[activePlayer].style.color="white"
    if(activePlayer==1) {
        activePlayer=0;
    } else {
        activePlayer = 1;
    }
    message[activePlayer].style.color="orange"
}

let randomizer = () => {
    return Math.floor((Math.random() * 6) + 1); //random integer between 0 and 10
}

let picSelector = (value) => {
    diceImg.src=`./res/dice${value}.png`
    diceImg.style.display = "block"
}

let messCol = (col) => {
    message.activePlayer.style.color=`${col}`
}

let messageInit = (player, col) => {
    message[player].textContent=`Player ${player+1}`;
    message[player].style.color=`${col}`
    scoreBox[player].textContent=0;
    score[player]=0;
}

newGame.addEventListener("click",(event) => {
    activePlayer=0
    diceImg.style.display="none"
    main.style.display="flex";
    messageInit(0, "orange");
    messageInit(1, "white");
})

let win = () => {
    message[activePlayer].textContent=`player ${activePlayer+1} wins`;
    message[activePlayer].style.color="green"
    if(activePlayer==1) {
        activePlayer=0;
    } else {
        activePlayer=1;
    }
    message[activePlayer].textContent=`player ${activePlayer+1} loses`;
    message[activePlayer].style.color="red";
    scoreBox[activePlayer].textContent=0;
}

button.addEventListener("click", (event) => { 
    const number = randomizer();
    if(number==1){
        playerChange();
        win()
    } else if(score[activePlayer]+number >= 20){
        score[activePlayer] += number;
        scoreBox[activePlayer].textContent=score[activePlayer];
        win();
    } else {
        score[activePlayer] += number;
        scoreBox[activePlayer].textContent=score[activePlayer];
    }
    picSelector(number);
})

hold.addEventListener("click", (event) => {
    playerChange();
})
