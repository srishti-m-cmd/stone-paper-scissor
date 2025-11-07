let userScore =0;
let compscore =0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user =document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const gencompchoice =() => {
 const options=["rock","paper","scissors"];
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx];
}

const uscore =(userWin) =>{
    if(userWin){
      userScore+=userScore;
    }
}

const drawgame =() =>{
  console.log("game was draw!")
    msg.innerText="Game is draw! Play Again";
    msg.style.backgroundColor = "#081b31";


};


const showWinner= (userWin,userchoice,compchoice) =>{
  if(userWin){
    userScore++;
    user.innerText = userScore;
    msg.innerText=`you win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";

  }else{
    compscore++;
    comp.innerText = compscore;
    msg.innerText=`you lose! ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";

    
  }
};

const playgame =(userchoice) =>{
const compchoice=gencompchoice();




if(userchoice===compchoice){
  drawgame();

}else{
  let userWin =true;
  if(userchoice ==="rock"){
   userWin = compchoice === "paper"?false:true;
  }else if(userchoice === "paper"){
    userWin = compchoice === "scissors"?false:true;
  }else if (userchoice === "scissors"){
    userWin = compchoice === "rock"?false:true;
  }
  showWinner(userWin,userchoice,compchoice);
}

};


choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
  });
});