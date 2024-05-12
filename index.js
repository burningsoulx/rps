function compChoice() {
    let x = Math.floor(Math.random() * 3)
    let y;
    if (x === 0) {
        y = 'paper'
    }
    else if (x === 1) {
        y = 'scissors'
    }
    else if (x===2) {
        y = 'rock'
    }
    return y
}
let humanscore =0;
let compscore=0;
function game(human,comp) {
    human = human.toLowerCase();
    comp.toLowerCase();

    if (human === comp) {
        console.log(`Its a tie, ${human} ${comp}, current score is Human - ${humanscore}, Computer - ${compscore}`)
    } else if (human.includes('rock') && comp.includes('scissors') ||
        human.includes('paper') && comp.includes('rock') ||
        human.includes('scissors') && comp.includes('paper')) {
        ++humanscore
       return `You won ${human} beats ${comp} current score is Human - ${humanscore}, Computer - ${compscore} `
    }
    else {
        ++compscore
        console.log(`You lost, ${comp} beats ${human}, Computer score is ${compscore}, Human score is ${humanscore}`)
    }
}

function final() {
    if (humanscore===5 || compscore===5) {
        humanscore === 5 ? console.log(`Human won with ${humanscore} points, Compscore:${compscore}`) : console.log(`Computer has won with ${compscore} points, Human ${humanscore}`)
    }
    else if (humanscore<=5 || compscore<=5) {
        game('paper',compChoice());
        final()

    }
    }
    console.log(final())