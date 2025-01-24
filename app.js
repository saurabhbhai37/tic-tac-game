let boxes= document.querySelectorAll(".box")
let resetbtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainar =document.querySelector(".msg-containar")
let msg = document.querySelector("#msg")

let turnO = true ;
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];


const resetGame = ()=>{
    turnO = true;
    enebleBoxes();
    msgcontainar.classList.add("hide");
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        if(turnO){
            box.innerText="o";
            turnO = false;
        }
        else{
            box.innerText="x";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();

    });
    
});

const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enebleBoxes =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainar.classList.remove("hide");
    disableBoxes();
};



const checkwinner = ()=> {
    for (let pattern of winpattern){
        let pos1val = boxes [pattern[0]].innerText;
        let pos2val = boxes [pattern[1]].innerText;
        let pos3val = boxes [pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val == pos2val && pos2val == pos3val){
                console.log("winner",pos3val);
                showwinner(pos1val)

            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);