let question = document.querySelector('#question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score  = 0
let questionCounter = 0
let availableQuestions = [];

let questions = [
    {
    question: 'What is the fastest animal on land?',
    choice1: 'Lion',
    choice2: 'Cheetah',
    choice3: 'Leopard',
    choice4: 'Tiger',
    answer: 2,
},
{
    question: 'What is the Capital of Seychelles?',
    choice1: 'Dakar',
    choice2: 'Kinshasa',
    choice3: 'Victoria',
    choice4: 'Bamako',
    answer: 3,
},
{
    question: 'What is the highest mountain in Africa?',
    choice1: 'Mount Kilimanjaro',
    choice2: 'Mount Olumo',
    choice3: 'Mount Everest',
    choice4: 'Mount Elbrus',
    answer: 1,
},
{
    question: 'The first Capital of Nigeria was?',
    choice1: 'Ogun State',
    choice2: 'Abuja',
    choice3: 'Anambra',
    choice4: 'Lagos',
    answer: 4,
},
{
    question: 'When was Nigeria Police Force formed?',
    choice1: '1930',
    choice2: '1920',
    choice3: '1935',
    choice4: '1925',
    answer: 1,
},
{
    question: 'What is the full meaning of W.H.O?',
    choice1: 'World Help Organization',
    choice2: 'World Head Organization',
    choice3: 'World Health Organization',
    choice4: 'World Health Organizers',
    answer: 3,
},
{
    question: 'Which year did Nigeria became a Republican State?',
    choice1: '1960',
    choice2: '1963',
    choice3: '1999',
    choice4: '1966',
    answer: 2,
}, 
{
    question: 'When was Nigeria Northern and Southern Protectorate amalgamated?',
    choice1: '1960',
    choice2: '1963',
    choice3: '1900',
    choice4: '1914',
    answer: 4,
}, 
{
    question: 'The most populous black country in the world is?',
    choice1: 'South-Africa',
    choice2: 'Brazil',
    choice3: 'Nigeria',
    choice4: 'U.S.A',
    answer: 3,
}, 
{
    question: 'Yola is to Adamawa while Yenogoa is to __?',
    choice1: 'Bende',
    choice2: 'Rivers',
    choice3: 'Bayelsa',
    choice4: 'Yobe',
    answer: 3,
}, 
]

let SCORE_POINTS = 10
let MAX_QUESTIONS = 10

startGame = ()=> {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)* 100}%`

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice =>{
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(()=> {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)
    })
})
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
startGame()