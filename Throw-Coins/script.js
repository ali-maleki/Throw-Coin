

let textArray = ["Heads","Tails"];
let score = [0,0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click",tossCoin);
};

function tossCoin(e) {
     let playerGuess = e.target.innerText;
     let computerGuess = Math.floor(Math.random()*2);
     let computer = textArray[computerGuess];
     message.innerHTML = "Computer Selected: " + computer + " => ";

let output;
if (playerGuess === computer) {
     output = " Player Win . ";
     score[0]++;
}
else
{
     output = " Computer Win . ";
     score[1]++;
};
message.innerHTML += output + "<br> Player: " + score[0] + "<br>" + "Computer: " + score[1];
};


