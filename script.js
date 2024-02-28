let x; 

let you=0;
let comp=0;

let userChoice = document.querySelectorAll(".image");


const generatechoice= ()=>{
    let option=["rock", "paper", "scissors"];
    let y =Math.floor(Math.random() * 3);
    return option[y];
    
}

const playgame= (x) =>{
    y=generatechoice();
    document.querySelector(".compres").innerHTML="Comp Choice :"+ y;

   if (x == y) {
    document.querySelector(".move").innerHTML="Tie";
    document.querySelector(".reasult").style.backgroundColor="#EF5480";
   }else if (x == "rock" && y == "paper") {
    document.querySelector(".move").innerHTML="Lost";
    document.querySelector(".reasult").style.backgroundColor="red";
    comp++;
    document.querySelector("#comp").innerHTML=comp;
   }else if (x == "rock" && y == "scissors") {
    document.querySelector(".move").innerHTML="Win";
    document.querySelector(".reasult").style.backgroundColor="green";
    you++;
    document.querySelector("#user").innerHTML=you;
   }else if (x == "paper" && y == "rock") {
    document.querySelector(".move").innerHTML="Win";
    document.querySelector(".reasult").style.backgroundColor="green";
    you++;
    document.querySelector("#user").innerHTML=you;
   }else if (x == "paper" && y == "scissors") {
    document.querySelector(".move").innerHTML="Lost";
    document.querySelector(".reasult").style.backgroundColor="red";
    comp++;
    document.querySelector("#comp").innerHTML=comp;
   }else if (x == "scissors" && y == "rock") {
    document.querySelector(".move").innerHTML="Lost";
    document.querySelector(".reasult").style.backgroundColor="red";
    comp++;
    document.querySelector("#comp").innerHTML=comp;
   }else if (x == "scissors" && y == "paper") {
    document.querySelector(".move").innerHTML="Win";
    document.querySelector(".reasult").style.backgroundColor="green";
    you++;
    document.querySelector("#user").innerHTML=you;
   }
}

userChoice.forEach(element => {
    element.addEventListener("click", (e) => {
       const x = element.getAttribute("id");
        playgame(x);
    });
});


