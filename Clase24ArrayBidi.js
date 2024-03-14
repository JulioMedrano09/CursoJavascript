let array1D = [1, 2, 3] //Unidimencional
let array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ] //Bidimensional

array2D[1][2] = 10
console.log(array2D)

let value = array2D[0][1]
console.log(value)

//Operations

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        console.log(array2D[i][j])
    }
}

function finElement(array2D, element) {
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            if (array2D[i][j] === element) {
                return true
            }
        }
    }
    return false
}

console.log(finElement(array2D, 5))

function duplicateArray2D(array2D) {
    let newArray2D = []
    for (let i = 0; i < array2D.length; i++) {
        newArray2D = [...array2D[i]]
    }
    return newArray2D
}

console.log(duplicateArray2D(array2D))

//Excersise tournament winner

function tournamentWinner(competitions, results) {
    const scores = {}
    let winner = ''
    for (let i = 0; i < competitions.length; i++) {
        //const home = competitions[i][0]
        const [home, away] = competitions[i]
        const winningTeam = results[i] === 0 ? away : home

        scores[winningTeam] = (scores[winningTeam] || 0) + 3

        if (!winner || scores[winningTeam] > scores[winner]) {
            winner = winningTeam
        }
    }
    return winner
}

const competitions = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavaScript']
]

const results = [0, 0, 1]
console.log(tournamentWinner(competitions, results))