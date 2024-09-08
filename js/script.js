const startButton = document.querySelectorAll('.category-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

let currentQuestionIndex, selectedCategory, score;

const questions = {
    math: [
        {
            question: 'Quanto é 5 + 3?',
            answers: [
                { text: '7', correct: false },
                { text: '8', correct: true },
                { text: '9', correct: false },
                { text: '10', correct: false }
            ]
        },
        {
            question: 'Quanto é 7 x 6?',
            answers: [
                { text: '42', correct: true },
                { text: '36', correct: false },
                { text: '48', correct: false },
                { text: '52', correct: false }
            ]
        },
        {
                question: 'Quanto é 12 ÷ 4?',
                answers: [
                    { text: '5', correct: false },
                    { text: '4', correct: false },
                    { text: '3', correct: true },
                    { text: '6', correct: false }
                ]
            },
            {
                question: 'Quanto é 9²?',
                answers: [
                    { text: '99', correct: false },
                    { text: '72', correct: false },
                    { text: '91', correct: false },
                    { text: '81', correct: true }
                ]
            },
            {
                question: 'Qual é a raiz quadrada de 49?',
                answers: [
                    { text: '6', correct: false },
                    { text: '7', correct: true },
                    { text: '8', correct: false },
                    { text: '9', correct: false }
                ]
            },
            {
                question: 'Quanto é 15 + 6?',
                answers: [
                    { text: '20', correct: false },
                    { text: '21', correct: true },
                    { text: '22', correct: false },
                    { text: '23', correct: false }
                ]
            },
            {
                question: 'Quanto é 50 - 25?',
                answers: [
                    { text: '25', correct: true },
                    { text: '20', correct: false },
                    { text: '30', correct: false },
                    { text: '35', correct: false }
                ]
            },
            {
                question: 'Quanto é 8 x 9?',
                answers: [
                    { text: '81', correct: false },
                    { text: '72', correct: true },
                    { text: '64', correct: false },
                    { text: '70', correct: false }
                ]
            },
            {
                question: 'Quanto é 100 ÷ 5?',
                answers: [
                    { text: '30', correct: false },
                    { text: '25', correct: false },
                    { text: '15', correct: false },
                    { text: '20', correct: true }
                ]
            }        
    ],
    portuguese: [
        {
            question: 'Qual é a forma correta de escrever?',
            answers: [
                { text: 'Caza', correct: false },
                { text: 'Kasa', correct: false },
                { text: 'Casa', correct: true },
                { text: 'Cassa', correct: false }
            ]
        },
        {
            question: 'Qual é o plural de "cão"?',
            answers: [
                { text: 'Cãos', correct: false },
                { text: 'Cães', correct: true },
                { text: 'Cãons', correct: false },
                { text: 'Cãens', correct: false }
            ]
        },
        {
                question: 'Qual a forma correta: "casa" ou "kasa"?',
                answers: [
                    { text: 'kasa', correct: false },
                    { text: 'casa', correct: true }
                ]
            },
            {
                question: 'Qual a classe gramatical da palavra "feliz"?',
                answers: [
                    { text: 'adjetivo', correct: true },
                    { text: 'substantivo', correct: false },
                    { text: 'verbo', correct: false },
                    { text: 'advérbio', correct: false }
                ]
            },
            {
                question: 'Qual a função do ponto de interrogação?',
                answers: [
                    { text: 'indicar exclamação', correct: false },
                    { text: 'indicar pausa', correct: false },
                    { text: 'indicar surpresa', correct: false },
                    { text: 'indicar pergunta', correct: true }
                ]
            },
            {
                question: 'A frase "Ele comeu rápido" está no:',
                answers: [
                    { text: 'pretérito imperfeito', correct: false },
                    { text: 'pretérito perfeito', correct: true },
                    { text: 'futuro do presente', correct: false },
                    { text: 'presente', correct: false }
                ]
            },
            {
                question: 'Qual palavra é um substantivo?',
                answers: [
                    { text: 'rapidamente', correct: false },
                    { text: 'correndo', correct: false },
                    { text: 'felizmente', correct: false },
                    { text: 'cachorro', correct: true }
                ]
            },
            {
                question: 'Complete a frase: "Ela ___ muito inteligente."',
                answers: [
                    { text: 'está', correct: false },
                    { text: 'ser', correct: false },
                    { text: 'é', correct: true },
                    { text: 'foi', correct: false }
                ]
            },
            {
                question: 'Qual a forma correta: "excessão" ou "exceção"?',
                answers: [
                    { text: 'excessão', correct: false },
                    { text: 'exceção', correct: true }
                ]
            },
            {
                question: 'O plural de "coração" é:',
                answers: [
                    { text: 'coraçãoes', correct: false },
                    { text: 'corações', correct: true },
                    { text: 'corazões', correct: false },
                    { text: 'coraçãos', correct: false }
                ]
            }        
    ],
    science: [
        {
            question: 'Qual planeta é conhecido como o Planeta Vermelho?',
            answers: [
                { text: 'Terra', correct: false },
                { text: 'Vênus', correct: false },
                { text: 'Marte', correct: true },
                { text: 'Júpiter', correct: false }
            ]
        },
        {
            question: 'Qual é a fonte primária de energia para a Terra?',
            answers: [
                { text: 'Lua', correct: false },
                { text: 'Sol', correct: true },
                { text: 'Vento', correct: false },
                { text: 'Água', correct: false }
            ]
        },
        {
                question: 'Qual é o planeta mais próximo do Sol?',
                answers: [
                    { text: 'Marte', correct: false },
                    { text: 'Vênus', correct: false },
                    { text: 'Terra', correct: false },
                    { text: 'Mercúrio', correct: true }
                ]
            },
            {
                question: 'Qual é a função principal das folhas das plantas?',
                answers: [
                    { text: 'Armazenar água', correct: false },
                    { text: 'Absorver nutrientes do solo', correct: false },
                    { text: 'Proteger o caule', correct: false },
                    { text: 'Realizar a fotossíntese', correct: true }
                ]
            },
            {
                question: 'Qual gás as plantas absorvem durante a fotossíntese?',
                answers: [
                    { text: 'Oxigênio', correct: false },
                    { text: 'Dióxido de carbono', correct: true },
                    { text: 'Nitrogênio', correct: false },
                    { text: 'Hidrogênio', correct: false }
                ]
            },
            {
                question: 'Qual é o maior órgão do corpo humano?',
                answers: [
                    { text: 'Pele', correct: true },
                    { text: 'Cérebro', correct: false },
                    { text: 'Coração', correct: false },
                    { text: 'Fígado', correct: false }
                ]
            },
            {
                question: 'Qual é a principal fonte de energia para a Terra?',
                answers: [
                    { text: 'O Sol', correct: true },
                    { text: 'O vento', correct: false },
                    { text: 'A água', correct: false },
                    { text: 'O calor interno da Terra', correct: false }
                ]
            },
            {
                question: 'Como são chamados os animais que se alimentam apenas de plantas?',
                answers: [
                    { text: 'Detritívoros', correct: false },
                    { text: 'Carnívoros', correct: false },
                    { text: 'Onívoros', correct: false },
                    { text: 'Herbívoros', correct: true }
                ]
            },
            {
                question: 'O que é a água no estado sólido?',
                answers: [
                    { text: 'Vapor', correct: false },
                    { text: 'Gelo', correct: true },
                    { text: 'Chuva', correct: false },
                    { text: 'Orvalho', correct: false }
                ]
            },
            {
                question: 'Qual o processo pelo qual as plantas produzem seu próprio alimento?',
                answers: [
                    { text: 'Transpiração', correct: false },
                    { text: 'Respiração', correct: false },
                    { text: 'Fotossíntese', correct: true },
                    { text: 'Fermentação', correct: false }
                ]
            }        
    ]
};

startButton.forEach(button => {
    button.addEventListener('click', selectCategory);
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function selectCategory(e) {
    selectedCategory = e.target.dataset.category;
    startQuiz();
}

function startQuiz() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    questionContainer.style.display = 'block';
    feedbackElement.innerText = '';
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.innerText = `Pontuação: ${score}`;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[selectedCategory][currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    feedbackElement.innerText = '';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });

    if (correct) {
        score++;
        feedbackElement.innerText = 'Correto! Boa resposta!';
    } else {
        feedbackElement.innerText = 'Errado! Tente novamente!';
    }

    scoreElement.innerText = `Pontuação: ${score}`;

    if (questions[selectedCategory].length > currentQuestionIndex + 1) {
        nextButton.style.display = 'block';
    } else {
        startButton.forEach(button => {
            button.innerText = 'Matemática';
        });
        startButton.forEach(button => {
            button.innerText = 'Português';
        });
        startButton.forEach(button => {
            button.innerText = 'Ciências';
        });
        document.getElementById('home').style.display = 'block';
        questionContainer.style.display = 'none';
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.style.backgroundColor = '#4CAF50';
    } else {
        element.style.backgroundColor = '#f44336';
    }
}

function clearStatusClass(element) {
    element.style.backgroundColor = '';
}
