const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"];
let score =[0,0];

// console.log(buttons); (this is to control that our selector works.)

for(let i=0 ; i<buttons.length; i++){
console.log(buttons[i]);
buttons[i].addEventListener("click", function tossCoin(e){
    let playerGuess = e.target.innerText ;
//console.log("Player:" + e.target.innerText);
let computerToss=Math.floor(Math.random()*2);
//console.log("Computer:" + coinArray[computerToss]);
let computerGuess = coinArray[computerToss];
message.innerHTML = "Computer Selected " + computerGuess;

let output ;
if (playerGuess === computerGuess) {
    output = " Player Win " ;
    score [0]++;
} else {
    output = " Computer Win ";
    score[1]++; 
}
message.innerHTML += output + "</br> Player Score: " + score[0]; + "Computer Score: " + score[1];
});
};

