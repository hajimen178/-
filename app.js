  const questions = [
    { question: "ナポレオンはフランスの皇帝だった。", answer: true },
    { question: "第一次世界大戦は1914年に始まった。", answer: true },
    { question: "アレクサンドロス大王はローマ帝国の皇帝だった。", answer: true }
]; 

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer(userAnswer) {
    const resultElement = document.getElementById('result');
    if (userAnswer === questions[currentQuestionIndex].answer) {
        resultElement.textContent = "正解！";
    } else {
        resultElement.textContent = "不正解...";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resultElement.textContent += " クイズ終了！";
    }
}

showQuestion();


