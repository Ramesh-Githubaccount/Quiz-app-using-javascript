

let quizDB = [
    {
        question: "Q1. What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "HyperText Makeup Language",
        ans: "ans3"
    },
    {
        question: "Q2.What is the full form of CSS ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3.What is the full form of HTTP ?",
        a: "Hypertext Transfer Post",
        b: "Hey Transfer Protocol",
        c: "HyperText Text Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4.What is the full form of JS ?",
        a: "JavaScript",
        b: "JavaScore",
        c: "JustScript",
        d: "Jorden Shoes",
        ans: "ans1"
    }
];
let questionn = document.querySelector('.questione');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');
let showscore = document.querySelector('#showscore');
let answers = document.querySelectorAll('.answer');

let count = 0;
let score = 0;

LoadQuestion();

function LoadQuestion(){
    let questionlist = quizDB[count];
    questionn.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
    
}
function deselectAll(){
    // for(i=0;i<answers.length;i++){
    //     answers[i].checked = false;
    // answers.forEach((ansElm) => ansElm = false);
}


submit.addEventListener('click',function(){
    let answer = checkAnswer();
    if(answer==quizDB[count].ans){
        score++;
        console.log(score);
    };
    count++;

    deselectAll();
    if(count<quizDB.length){
        LoadQuestion();
    }
    else{
        showscore.innerHTML= ` <h3>Congrats !, you scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>  `;

        showscore.classList.remove('scorearea');
    }

})

function checkAnswer(){
    let cAnswer;
    for(i=0;i<answers.length;i++){
        if(answers[i].checked){
           cAnswer = answers[i].id;
        }
    }
    return cAnswer;
}