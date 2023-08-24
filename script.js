const yourScore = document.querySelector(".your-score")
const machineScore = document.querySelector(".machine-score")
const showMensage = document.querySelector(".show-mensage")

let yourScoreNumber = 0
let machineScoreNumber = 0

function playHuman(humanChoice) {
    playTheGame(humanChoice, playMachine())
   
}

function playMachine() {
    const choises = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choises[randomNumber]
}

function playTheGame(human, machine) {
    if (human === machine) {
        showMensage.innerHTML = 'Deu empate!'
    } else if (human === 'pedra' && machine === 'tesoura' || human === 'papel' && machine === 'pedra' || human === 'tesoura' && machine === 'papel') {
        yourScoreNumber++
        yourScore.innerHTML = yourScoreNumber
        showMensage.innerHTML = 'Você ganhou da Alexa!'
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        showMensage.innerHTML = 'Você perdeu para a Alexa'
    }

}