let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#btn");
let newbtn=document.querySelector('#newbtn');
let msgcontainer= document.querySelector('.msg-container');
let msg =document.querySelector('#msg')

let turno =true
let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetgame=()=>{
    let turno =true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turno){
            box.innerText="O";
            turno = false
        }else{
            box.innerText="X"
            turno = true
            box.style.color="red";
        }
        box.disabled = true;

        checkWinner()
    })
})
let disablebtn=()=>{
    for(let i of boxes){
        i.disabled = true;
    }
}
let enablebtn=()=>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText="";
    }
}
const showWineer=(win)=>{
    msg.innerText = `conguralation winner is ${win}`;
    msgcontainer.classList.remove("hide")
    disablebtn()

}

let checkWinner=()=>{
    for(let i of winPatterns){
        let p1= boxes[i[0]].innerText
        let p2 =boxes[i[1]].innerText
        let p3 = boxes[i[2]].innerText

        if(p1 !="" && p2 !="" && p3 !=""){
            if(p1 === p2 && p2 === p3){
                showWineer(p1)
                
            }
        }
    }
}
newbtn.addEventListener("click",resetgame);
rbtn.addEventListener("click",resetgame);