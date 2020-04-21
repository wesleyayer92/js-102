function rps(p1, p2) {
    switch(p1) {
        case 'rock':
            if (p2 === 'rock') {
                return 'draw';
            } else if (p2 === 'paper') {
                return 'player 2 wins';
            } else if (p2 === 'scissors') {
                return 'player 1 wins';
            }
        case 'paper':
            if (p2 === 'rock') {
                return 'player 1 wins';
            } else if (p2 === 'paper') {
                return 'draw';
            } else if (p2 === 'scissors') {
                return 'player 2 wins';
            }
        case 'scissors':
            if (p2 === 'rock') {
                return 'player 2 wins';
            } else if (p2 === 'paper') {
                return 'player 1 wins';
            } else if (p2 === 'scissors') {
                return 'draw';
            }
    }
}

console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'scissors'));