let gameSeq = [];
let userSeq = [];
// let arr = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250)
}


function levelUp() {
    userSeq = [];     // empty the array of user
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkAns(idx){
    
    if (userSeq[idx] == gameSeq[idx]){   // first to check whether the game's color = user's choiced color
        if(userSeq.length == gameSeq.length){ // if color are same then check that user has followed the proper color sequence
            setTimeout(levelUp, 1000);  // when both conditions are satisfied then levelup in 1 sec
        }
    } else{   // if color mismatched
        h2.innerHTML = `Game Over! Your Score was ${level}.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        // arr.push(level);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

// let highscore = Math.max(...arr);
// console.log(`Highest score is ${highscore}`);

// let h3 = document.querySelector("h3");
// h3.innerHTML = `Highest Score is ${highscore}`;

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    // arr = 0;
}

