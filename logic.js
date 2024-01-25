let choices = document.querySelectorAll(".choice")
let container = document.querySelector(".game")
let result = document.querySelector(".result")


const genCompChoice = ()=>{
    const  option  = ["rock","paper","scissors"]
    const comChoice = option[Math.floor(Math.random()*option.length)]
    return comChoice
}

const drawGame = ()=>{
    result.innerHTML = "Game was Draw.Play again."
    result.style.backgroundColor = "black"

}

  const  showWinner=(userWin) =>{
    if(userWin){
        result.innerHTML = "you win"
        result.style.backgroundColor = "green"
    }else{
        result.innerHTML = "Computer is win"
        result.style.backgroundColor = "red"

    }
}

const playGame = (userChoice) =>{
    container.innerHTML = ""

    const comChoice = genCompChoice()

    let game = document.createElement("div")
    // game.classList.add("game")
    game.innerHTML = `<div class="game">
    <div>
        <div class="user setimage">
            <img src="/images/${userChoice}.png" alt="">
        </div>
        <h1>you</h1>
    </div>
    <div>
        <div class="Computer setimage">
            <img src="/images/${comChoice}.png" alt="">
         </div>
            <h1>Computer</h1>
     </div>
    `
    container.append(game)


    if(userChoice === comChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false :true
        }else{
            userWin = comChoice === "rock" ? false : true
        }
        showWinner(userWin)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
        
    })
})