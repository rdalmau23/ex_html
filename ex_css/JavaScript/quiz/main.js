const preguntas = [
    {
        question: "¿Quién dijo la famosa frase 'Tal cual hermano'?",
        answers: [
            { text: "Adolf Hitler", correct: false },
            { text: "Pedro Sánchez", correct: false },
            { text: "Mr. Tartaria", correct: false },
            { text: "Mickey Mouse Empírico", correct: true }
        ]
    },
    {
        question: "¿Quién recibió una lengua de fuego?",
        answers: [
            { text: "Bizcochito", correct: false },
            { text: "Mr. Tartaria", correct: true },
            { text: "Jordi folla madres salvaje", correct: false },
            { text: "El Dandy de Barcelona", correct: false }
        ]
    }
];

const pregunta = document.getElementById('pregunta');
const botonRespuesta = document.getElementById('botonesRespuesta');
const siguiente = document.getElementById('siguiente');

let currentQuestionIndex = 0;
let puntuacion = 0;

function start() {
    currentQuestionIndex = 0;
    puntuacion = 0;
    siguiente.innerText = 'Siguiente';
    mostrarPregunta(preguntas[currentQuestionIndex]);
}

function mostrarPregunta(question) {
    pregunta.innerText = question.question;
    botonRespuesta.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('boton');
        button.innerText = answer.text;
        button.classList.add('boton');
        button.addEventListener('click', () => selectAnswer(answer));
        botonRespuesta.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        puntuacion++;
    }
    Array.from(botonRespuesta.children).forEach(button => {
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? 'green' : 'red';
        }
    });
    if (currentQuestionIndex < preguntas.length - 1) {
        siguiente.style.display = 'block';
    } else {
        siguiente.innerText = 'Reiniciar';
        siguiente.style.display = 'block';
    }
}

siguiente.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < preguntas.length) {
        mostrarPregunta(preguntas[currentQuestionIndex]);
        siguiente.style.display = 'none';
    } else {
        start();
    }
});

start();

