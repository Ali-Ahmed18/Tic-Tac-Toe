var turn = "&#10006"
var message = document.getElementById("message")
var boxs = document.querySelectorAll(".box")
var player2 = document.querySelector(".player2")
var player1 = document.querySelector(".player1")
var players = document.querySelector(".players")
var line = document.querySelector(".line")
var points = document.querySelectorAll(".points")
var flags = true
var i = 0
var p1Score = 0
var p2Score = 0


function draw(){
    for (index of boxs){
        if(index.innerHTML !== ""){
            i +=1
        } 
     }

     if(i >= 45){
        flags = false
        message.innerHTML = "Draw"
        return
     }
}

function choosePlayer(choose){
    choose.parentNode.style.pointerEvents = "none"
    if(choose.className == "player1"){
        choose.classList.add("bb")
        turn = "&#10006"
    }else{
        message.innerHTML = `${turn} Turn`
    }
}
var game = [
    [0, 1, 2, 20, 9, 0],
    [3, 4, 5, 20, 30, 0],
    [6, 7, 8, 20, 50, 0],
    [0, 3, 6, -27, 29, 90], 
    [1, 4, 7, 21, 29, 90],
    [2, 5, 8, 70, 29, 90],
    [0, 4, 8, 21, 29, 38.7], 
    [2, 4, 6, 21, 30, -40]  
]

function checkWin(){
    for(index of game){
        if((boxs[index[0]].innerText === boxs[index[1]].innerText) && (boxs[index[2]].innerText ===  boxs[index[1]].innerText)  && (boxs[index[0]].innerText !== "")){
            line.style.transform = `translate(${index[3]}%, ${index[4]}vh)rotate(${index[5]}deg)`
            line.style.width = "70%"
            line.style.transition = "0.5s ease"
            flags = false
            message.innerHTML = `${turn} Win`
            for (index of boxs) {
                index.style.pointerEvents = "none"
            }
            if(turn === "O"){
                ++p2Score
                points[1].innerHTML = p2Score
            }
            if(turn === "&#10006"){
                ++p1Score
                points[0].innerHTML = p1Score
            }
            
        }
    }
}

function playersTurn(){
    player1.removeAttribute("onclick")
    player2.removeAttribute("onclick")
  if(turn === "&#10006"){
        turn = 'O'
        message.innerText = `${turn} Turn`
        player1.classList.remove("bb")
        player2.classList.add("bb")
  }else{
        turn = '&#10006'
        message.innerText = `X Turn`
        player1.classList.add("bb")
        player2.classList.remove("bb")
  }
}

function gameBox(ele){
    ele.removeAttribute("onclick")
    if(turn == "O"){
        ele.style.color = "white"
    }else{
        ele.style.color = "red"
    }
    ele.innerHTML = turn
    draw()
    checkWin()
    if(flags){
        playersTurn()
        
    }
    
}

function restart(){
    
    for(index of boxs){
        i = 0
        index.setAttribute("onclick","gameBox(this)")
        index.innerHTML = ""
        index.style.pointerEvents = "auto"
        players.style.pointerEvents = "auto"
        player1.setAttribute("onclick","choosePlayer(this)")
        player2.setAttribute("onclick","choosePlayer(this)")
        player1.classList.add("bb")
        player2.classList.remove("bb")
        message.innerHTML = "star game or select player"
        turn = "&#10006"
        line.style.width = "0"
        line.style.transition = "none"
        line.style.transform = "none"
        flags = true
    }

}