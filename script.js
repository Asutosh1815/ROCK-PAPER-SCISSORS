let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const us=document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");

const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    msg.innerText="draw";
    msg.style.backgroundColor="yellow";
};

const showWinner=(userwin)=>{
    if (userwin){
        userscore++;
        us.innerText=userscore;
        msg.innerText="win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        cs.innerText=compscore;
        msg.innerText="lose";
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    const compchoice=compChoice();
    if (userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin= compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin= compchoice==="scissors"?false:true;
        }
        else{
            userwin= compchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});