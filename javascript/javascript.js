const correctAnswers = {
    'ques1': 'one-op2', 
    'ques2': 'two-op4',
    'ques3': 'three-op1', 
    'ques4': 'four-op3', 
    'ques5': 'five-op2', 
    'ques6': 'six-op1', 
    'ques7': 'seven-op3', 
    'ques8': 'eight-op1', 
    'ques9': 'nine-op3', 
    'ques10': 'ten-op2',
};

let timer;
let timeLeft = 60;

function check() {
    let score = 0;
    let allAnswered = true;

    Object.keys(correctAnswers).forEach(ques => {
        const selected = document.querySelector(`input[name="${ques}"]:checked`);
        const correct = correctAnswers[ques];
        
        if (!selected) {
            allAnswered = false;
        }

        if (selected && selected.id === correct) {
            document.getElementById(`result${ques}`).innerHTML = "Correct Answer";
            document.getElementById(`result${ques}`).style.color = "green";
            score++;
        } else {
            document.getElementById(`result${ques}`).innerHTML = `Wrong answer <br> Correct Answer is ${document.getElementById(correct).parentNode.innerHTML}`;
            document.getElementById(`result${ques}`).style.color = "rgb(200, 45, 45)";
        }
    });

    if (allAnswered) {
        document.getElementById("quiz-score").innerHTML = `Your Result: ${score}/10`;
    } else {
        alert("Please answer all questions before submitting.");
    }
}

function resetQuiz() {
    const allAnswers = document.querySelectorAll('input[type="radio"]');
    allAnswers.forEach(answer => answer.checked = false);
    const results = document.querySelectorAll('.result');
    results.forEach(result => result.innerHTML = '');
    document.getElementById("quiz-score").innerHTML = "0";
    timeLeft = 60;
    document.getElementById("timer").innerText = timeLeft;
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").innerText = timeLeft;
        } else {
            clearInterval(timer);
            alert("Time's up!");
            check();
        }
    }, 1000);
}

startTimer();
