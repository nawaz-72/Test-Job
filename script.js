const quizData = [
    {
        question:
            "What year was Train of Consequences released?",
        a: "1973",
        b: "1988",
        c: "1994",
        d: "1999",
        correct: "c",
    },
    {
        question:
            "Which Megadeth album was the song included on?",
        a: "Rust in Peace",
        b: "Youthanasia",
        c: "Peace sells… But who’s buying?",
        d: "Risk",
        correct: "b",
    },
    {
        question:
            "Who is credited as the song’s writer?",
        a: "Dave Mustaine",
        b: "Kirk Hammet",
        c: "Johnny Nash",
        d: "Devin Townsend",
        correct: "a",
    },
    {
        question: "What was the song’s peak positon on the US Mainstream Rock chart by Billboard magazine?",
        a: "1st",
        b: "2nd",
        c: "13th",
        d: "29th",
        correct: "d",
    },
];

const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const popupText = document.getElementById("verifyText");
const submitBtn = document.getElementById("submit");
const img = document.querySelector("#image");
const image = ['Image/Capture.PNG','Image/Capture1.PNG','Image/Capture2.PNG', 'Image/Capture3.PNG']


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    if (currentQuiz < quizData.length) {
        questionEl.innerText = quizData[currentQuiz].question;
        img.src = image[score];
        a_text.innerText = quizData[currentQuiz].a;
        b_text.innerText = quizData[currentQuiz].b;
        c_text.innerText = quizData[currentQuiz].c;
        d_text.innerText = quizData[currentQuiz].d;
        answerEls.forEach((e) => {
            e.addEventListener("click", () => {
                let selectedSize;
                for (const radioButton of answerEls) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    submitBtn.disabled = false;
                    break;
                    }
                    else
                    {
                        submitBtn.disabled = true;
                    }
                }
                });
        });

    } else {
            setTimeout(
                function open(event){
                    document.querySelector(".popup").style.display = "block";
                    if(score >= currentQuiz )
                    {
                        popupText.innerText = "Congratulation";
                        popupText.style.color = 'green';
                    }
                    else{
                        popupText.innerText = "Failed";
                        popupText.style.color = 'red';
                    }
                },
                1000 
            )
    }
}
function deselectAnswers() {
    answerEls.forEach((e) => {
        e.checked = false;
        submitBtn.disabled = true;
    });
    loadQuiz();
}
function getSelected() {
    answerEls.forEach((e) => {
        if (e.checked) {
            if (e.id == quizData[currentQuiz].correct) {
                score++;
            }            
        }
    });
    currentQuiz++;
    deselectAnswers();
}

submitBtn.addEventListener("click", () => {

    if (currentQuiz < quizData.length) {
        getSelected();
    }
    else {
        location.reload();
    }
});

       
