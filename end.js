let username = document.querySelector('#username')
let saveScoreBtn = document.querySelector('#saveScoreBtn')
let finalScore = document.querySelector('#finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []
let MAX_HIGH_SCORE = 100

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value
})

savehighScores = e =>{
    e.preventDefault()

    let score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a,b)=> {
        return b.score - a.score
    })
    highScores.splice(100)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

}