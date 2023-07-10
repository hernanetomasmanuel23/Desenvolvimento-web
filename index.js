const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {

    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    restState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }


    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)

    })

    function restState() {
        while ($answersContainer.firstChild) {
            $answersContainer.removeChild($answersContainer.firstChild)
        }

        document.body.removeAttribute("class")
        $nextQuestionButton.classList.add("hide")
    }
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelete :)"
            break

        case (performance >= 70):
            message = "Muito bom :)"
            break

        case (performance >= 50):
            message = "Bom"
            break
        default:
            message = "Pode Melhorar :("
    }
    $questionsContainer.innerHTML =
        `
    <p class="final-message">
    Você acertou ${totalCorrect} de ${totalQuestion} questões!
    <span>Resultado: ${message}</span>
    </p>
    <button onclick = window.location.reload() class="button">
    Refazer o Jogo
    </button>

    `

}




















const questions = [{
        question: "Qual é a capital de Angola?",
        answers: [
            { text: "Luanda", correct: true },
            { text: "Bengo", correct: false },
            { text: "Cuanza-Norte", correct: false },
            { text: "Benguela", correct: false },

        ]

    },
    {
        question: "Quando começou a 1ª Guerra Mudial?",
        answers: [
            { text: "1935", correct: false },
            { text: "1894", correct: false },
            { text: "1915", correct: false },
            { text: "1919", correct: true },

        ]

    },
    {
        question: "Quantos livros tem a Bíblia Sagrada?",
        answers: [
            { text: "67", correct: false },
            { text: "66", correct: true },
            { text: "60", correct: false },
            { text: "65", correct: false },

        ]

    },
    {
        question: "Qual é a Raiz Quadrada de 25?",
        answers: [
            { text: "5", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: false },

        ]

    },

    {
        question: "Quem foi Quimpa Vita?",
        answers: [
            { text: "Empresária", correct: false },
            { text: "Governadora", correct: false },
            { text: "Profetiza e Líder Política", correct: true },
            { text: "Apresentadora", correct: false },

        ]

    },
    {
        question: "Quem foi Abraham Lincoln?",
        answers: [
            { text: "Presidente", correct: true },
            { text: "Activista", correct: false },
            { text: "Advogado", correct: false },
            { text: "Ministro", correct: false },

        ]

    },
    {
        question: "Quantas Províncias tem Angola?",
        answers: [
            { text: "24", correct: false },
            { text: "19", correct: false },
            { text: "17", correct: false },
            { text: "18", correct: true },

        ]

    },
    {
        question: "Em que Ano Morreu o Estado Maior do Kuduro (Nagrelha)?",
        answers: [
            { text: "2023", correct: true },
            { text: "2022", correct: false },
            { text: "2021", correct: false },
            { text: "2020", correct: false },

        ]

    },
    {
        question: "Que País invadiu a Ucrânia no ano de 2022?",
        answers: [
            { text: "Angola", correct: false },
            { text: "Espanha", correct: false },
            { text: "Brasil", correct: false },
            { text: "Rússia", correct: true },

        ]

    },
    {
        question: "Quem foi Albert Einstein?",
        answers: [
            { text: "Físico e Matemático", correct: true },
            { text: "Jogadore", correct: false },
            { text: "Astrounauta", correct: false },
            { text: "Cientista", correct: false },

        ]

    },

    {
        question: "De que Nacionalidade é Lionel Messi?",
        answers: [
            { text: "Nigeriano", correct: false },
            { text: "Brasileiro", correct: false },
            { text: "Argentino", correct: true },
            { text: "Espanhol", correct: false },

        ]

    },
    {
        question: "Quem Desenvolveu o jogo My Favo Quiz em 2023?",
        answers: [
            { text: "David Dias", correct: false },
            { text: "Daniel Hengo", correct: false },
            { text: "Hernani Manuel", correct: true },
            { text: "Alexandre Siabala", correct: false },

        ]

    },
    {
        question: "Quantos dias tem 1 Ano?",
        answers: [
            { text: "330", correct: false },
            { text: "360", correct: false },
            { text: "365", correct: true },
            { text: "325", correct: false },

        ]

    },
    {
        question: "Qual é o nome da Ministra da Saúde em Angola?",
        answers: [
            { text: "Sílva Lutucuta", correct: true },
            { text: "Joana Lima", correct: false },
            { text: "Mara Dalva", correct: false },
            { text: "Ana Dias", correct: false },

        ]

    },
    {
        question: "Em que Ano foi realizado a 3ª edição do AGOTIC em Angola ?",
        answers: [
            { text: "2018", correct: false },
            { text: "2022", correct: false },
            { text: "2019", correct: false },
            { text: "2023", correct: true },

        ]

    },
    {
        question: "Em que ano começou a Pandemia da Covid-19?",
        answers: [
            { text: "2017", correct: false },
            { text: "2019", correct: true },
            { text: "2020", correct: false },
            { text: "2015", correct: false },

        ]

    },
    {
        question: "Qual é o nome da Apresentadora do Programa O Momento da Blindada?",
        answers: [
            { text: "Zuleica Wilson", correct: false },
            { text: "Sandra Gomes", correct: false },
            { text: "Stela de Carvalho", correct: true },
            { text: "Telma Leitão", correct: false },

        ]

    },
    {
        question: "Qual é o nome do Governador de Luanda?",
        answers: [
            { text: "Manuel Homem", correct: true },
            { text: "Manuel de Oliveira", correct: false },
            { text: "Jorge Morais", correct: false },
            { text: "Augusto António", correct: false },

        ]

    },

    {
        question: "O que significa a palavra Watch em Português?",
        answers: [
            { text: "Período", correct: false },
            { text: "Contador", correct: false },
            { text: "Relógio", correct: true },
            { text: "Alarme", correct: false },

        ]

    },

    {
        question: "Qual destes Personagens participou no filme Hora de Ponta?",
        answers: [
            { text: "Angelina Jolie", correct: false },
            { text: "Pall Walker", correct: false },
            { text: "Collin Farrell", correct: false },
            { text: "Jack Chan", correct: true },

        ]

    },

    {
        question: "Qual é o nome da irmã mais velha de Phineas e Ferb?",
        answers: [
            { text: "Marta", correct: false },
            { text: "Olivia", correct: false },
            { text: "Candâce", correct: true },
            { text: "Cristina", correct: false },

        ]

    },

    {
        question: "De quem é a Música Castelo de Lata?",
        answers: [
            { text: "Prodígio", correct: true },
            { text: "NGA", correct: false },
            { text: "Kelson Most", correct: false },
            { text: "Paulelson", correct: false },

        ]

    },

    {
        question: "Quantos Paises tem o Continente Africano?",
        answers: [
            { text: "54", correct: true },
            { text: "53", correct: false },
            { text: "60", correct: false },
            { text: "49", correct: false },

        ]

    },

    {
        question: "Quantos Homens escreveram a Bíblia Sagrada?",
        answers: [
            { text: "50", correct: false },
            { text: "39", correct: false },
            { text: "40", correct: true },
            { text: "42", correct: false },

        ]

    },

    {
        question: "O que significa a Sigla OMS?",
        answers: [
            { text: "Organização Mudial da Saúde", correct: true },
            { text: "Organização Mudial de Serviço", correct: false },
            { text: "Organização Mudial de Ciências", correct: false },
            { text: "Organização Mudial de Segurança", correct: false },

        ]

    },
    {
        question: "Quanto é 9x9x2 ?",
        answers: [
            { text: "160", correct: false },
            { text: "162", correct: true },
            { text: "156", correct: false },
            { text: "123", correct: false },

        ]

    },
    {
        question: "Em que ano morreu o Presidente José Eduardo dos Santos?",
        answers: [
            { text: "2023", correct: true },
            { text: "2020", correct: false },
            { text: "2019", correct: false },
            { text: "2017", correct: false },

        ]

    },
    {
        question: "Quantas Classes tem o Ensino Primário?",
        answers: [
            { text: "8", correct: false },
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },

        ]

    },
    {
        question: "De quem é a Música Bird Set Free?",
        answers: [
            { text: "Camila Cabello", correct: false },
            { text: "Sia", correct: true },
            { text: "Card B", correct: false },
            { text: "Rihanna", correct: false },

        ]

    },
    {
        question: "Qual destes Personagens participou na Novela O Fruto Proibido?",
        answers: [
            { text: "Sevval Sam", correct: true },
            { text: "Sumru Yavrucuk", correct: false },
            { text: "Uraz Kaygalaroglu", correct: false },
            { text: "Maria Zarattini", correct: false },

        ]

    },
    {
        question: "Quantos grupo é constituído a Tabela Períodica?",
        answers: [
            { text: "19", correct: false },
            { text: "17", correct: false },
            { text: "16", correct: false },
            { text: "18", correct: true },

        ]

    },
    {
        question: "O que significa a Sigla E.P.G na Física?",
        answers: [
            { text: "Energia Potencial", correct: false },
            { text: "Energia Potencial Gravitica", correct: true },
            { text: "Energia Gravitica Potencial", correct: false },
            { text: "Energia Gravitica", correct: false },

        ]

    },
    {
        question: "Qual é a Capital de Moçambique?",
        answers: [
            { text: "Maputo", correct: true },
            { text: "Kinshasa", correct: false },
            { text: "Nanpula", correct: false },
            { text: "Cabo-Ledo", correct: false },

        ]

    },
    {
        question: "Quantos Períodos tem a Tabela Períodica?",
        answers: [
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true },

        ]

    },
    {
        question: "Quem foi Adam Smith?",
        answers: [
            { text: "Programador", correct: false },
            { text: "Inventor", correct: false },
            { text: "Economista e Filósofo", correct: true },
            { text: "Engenheiro Electrico", correct: false },

        ]

    },
    {
        question: "Qual é o nome verdadeiro do Homem Aranha?",
        answers: [
            { text: "Fredy Piterson", correct: false },
            { text: "Oscar Maguinni", correct: false },
            { text: "Herry Thonson", correct: false },
            { text: "Pitter Park", correct: true },

        ]

    },
    {
        question: "Em que ano morreu o Basquetebolista Angolano Reggie Moore?",
        answers: [
            { text: "2021", correct: false },
            { text: "2023", correct: true },
            { text: "2018", correct: false },
            { text: "2020", correct: false },

        ]

    },
    {
        question: "Quantos paises tem a Europa?",
        answers: [
            { text: "63", correct: false },
            { text: "56", correct: false },
            { text: "60", correct: false },
            { text: "50", correct: true },

        ]

    },
    {
        question: "Quem criou a Internet?",
        answers: [
            { text: "Tim Berners-Lee", correct: true },
            { text: "Robert Thonson", correct: false },
            { text: "Rodolf Antwany", correct: false },
            { text: "Mark Petterson", correct: false },

        ]

    },
    {
        question: "Qual é o país mais pequeno em África?",
        answers: [
            { text: "Moçambique", correct: false },
            { text: "Gâmbia", correct: true },
            { text: "Angola", correct: false },
            { text: "Cabo-Verde", correct: false },

        ]

    },
    {
        question: "Quem foi Martin Luther King?",
        answers: [
            { text: "Piloto", correct: false },
            { text: "Ministro", correct: false },
            { text: "Professore", correct: false },
            { text: "Ativista", correct: true },

        ]

    },
    {
        question: "Em que continente fica o País Azerbaijão?",
        answers: [
            { text: "África", correct: false },
            { text: "Ásia", correct: true },
            { text: "America", correct: false },
            { text: "Europa", correct: false },

        ]

    },
    {
        question: "Em que ano começou o concurso Unitel Estrelas ao Palco?",
        answers: [
            { text: "2021", correct: false },
            { text: "2019", correct: false },
            { text: "2020", correct: false },
            { text: "2018", correct: true },

        ]

    },
    {
        question: "Em que ano foi Fundado o Futebol?",
        answers: [
            { text: "1634", correct: false },
            { text: "1655", correct: false },
            { text: "1863", correct: true },
            { text: "1756", correct: false },

        ]

    },
    {
        question: "Qual é o nome verdadeiro do Cantor Eminem?",
        answers: [
            { text: "Marshall Bruce Mathers", correct: true },
            { text: "Slim Shady", correct: false },
            { text: "Kimberly Scott", correct: false },
            { text: "Pitter Anne", correct: false },

        ]

    },
    {
        question: "Em que ano começou a guerra Civil em Angola?",
        answers: [
            { text: "1978", correct: false },
            { text: "1945", correct: false },
            { text: "1965", correct: false },
            { text: "1975", correct: true },

        ]

    },
    {
        question: "Quem Inventou a lâmpada?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Frank Lee", correct: false },
            { text: "Robert Collins", correct: false },
            { text: "Saanv Durban", correct: false },

        ]

    },
    {
        question: "Qual foi o primeiro Album Musical de Cef Tanzy?",
        answers: [
            { text: "Pintor de Rua", correct: false },
            { text: "Cartel De Amor", correct: false },
            { text: "Legado da Lenda", correct: false },
            { text: "Botão Rosa", correct: true },

        ]

    },
    {
        question: "Qual é a 1ª Lígua mais falada no Mundo ?",
        answers: [
            { text: "Inglês", correct: false },
            { text: "Mandarim", correct: true },
            { text: "Espanhol", correct: false },
            { text: "Frânces", correct: false },

        ]

    },
    {
        question: "Qual é o nome do Presidente da França Atualmente?",
        answers: [
            { text: "Jacques Chirac", correct: false },
            { text: "Nicolas Sarkozy", correct: false },
            { text: "Michel Dablin", correct: false },
            { text: "Emmanuel Macron", correct: true },

        ]

    },
    {
        question: "Quem foi Campeão da Champions League em 2023?",
        answers: [
            { text: "Inter", correct: false },
            { text: "Real Madrid", correct: false },
            { text: "Manchester City", correct: true },
            { text: "Barcelona", correct: false },

        ]

    },


]