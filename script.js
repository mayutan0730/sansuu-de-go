let difficulty = "normal";
let score = 0;
let combo = 0;
let bestCombo = 0;
let life = 3;

let time = 30;
let correctAnswer = 0;
let timerInterval = null;


// HTMLの要素
const question = document.getElementById("question");
const answers = document.getElementById("answers");

const scoreDisplay = document.getElementById("score");
const comboDisplay = document.getElementById("combo");
const lifeDisplay = document.getElementById("life");
const timerDisplay = document.getElementById("timer");

const message = document.getElementById("message");

const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over");


// ゲーム開始
function startGame() {

    clearInterval(timerInterval);

    score = 0;
    combo = 0;
    bestCombo = 0;
    life = 3;
    time = 30;

    gameScreen.classList.remove("hidden");
    gameOverScreen.classList.add("hidden");

    message.textContent = "正しい答えを選ぼう！";
    message.style.color = "";

    updateDisplay();

    createQuestion();

    // カウントダウン開始
    timerInterval = setInterval(function () {

        time--;

        timerDisplay.textContent = time;

        if (time <= 0) {
            endGame();
        }

    }, 1000);
}


// 問題を作る
function createQuestion() {

    let maxNumber;
    let operators;


    // 🌱 かんたん
    if (difficulty === "easy") {

        maxNumber = 10;
        operators = ["+", "-"];

    }


    // 🔥 ふつう
    else if (difficulty === "normal") {

        maxNumber = 30;
        operators = ["+", "-", "×"];

    }


    // 💀 むずかしい
    else {

        createHardQuestion();
        return;

    }


    const num1 =
        Math.floor(Math.random() * maxNumber) + 1;

    const num2 =
        Math.floor(Math.random() * maxNumber) + 1;


    const operator =
        operators[
            Math.floor(Math.random() * operators.length)
        ];


    if (operator === "+") {

        correctAnswer = num1 + num2;

    }

    else if (operator === "-") {

        correctAnswer = num1 - num2;

    }

    else {

        correctAnswer = num1 * num2;

    }


    question.textContent =
        `${num1} ${operator} ${num2} = ?`;


    createAnswers();
}

function createHardQuestion() {

    const num1 =
        Math.floor(Math.random() * 20) + 1;

    const num2 =
        Math.floor(Math.random() * 10) + 1;

    const num3 =
        Math.floor(Math.random() * 10) + 1;


    const operators = ["+", "-", "×", "÷"];


    const operator1 =
        operators[
            Math.floor(Math.random() * operators.length)
        ];


    const operator2 =
        operators[
            Math.floor(Math.random() * operators.length)
        ];


    let answer;


    // 計算する
    if (operator1 === "+") {
        answer = num1 + num2;
    }

    else if (operator1 === "-") {
        answer = num1 - num2;
    }

    else if (operator1 === "×") {
        answer = num1 * num2;
    }

    else {
        answer = num1 / num2;
    }


    // 2つ目の計算
    if (operator2 === "+") {
        answer = answer + num3;
    }

    else if (operator2 === "-") {
        answer = answer - num3;
    }

    else if (operator2 === "×") {
        answer = answer * num3;
    }

    else {
        answer = answer / num3;
    }


    // 小数になった問題は作り直す
    if (!Number.isInteger(answer) || answer < 0) {

        createHardQuestion();
        return;

    }


    correctAnswer = answer;


    question.textContent =
        `${num1} ${operator1} ${num2} ${operator2} ${num3} = ?`;


    createAnswers();
}


// 選択肢を作る
function createAnswers() {

    answers.innerHTML = "";

    let choices = [correctAnswer];

    // 正解以外の答えを3つ作る
    while (choices.length < 4) {

        let wrongAnswer =
            correctAnswer +
            Math.floor(Math.random() * 15) - 7;

        if (wrongAnswer < 0) {
            wrongAnswer = Math.abs(wrongAnswer);
        }

        if (!choices.includes(wrongAnswer)) {
            choices.push(wrongAnswer);
        }
    }


    // シャッフル
    choices.sort(function () {
        return Math.random() - 0.5;
    });


    // ボタンを作る
    choices.forEach(function (choice) {

        const button = document.createElement("button");

        button.textContent = choice;

        button.addEventListener("click", function () {
            answerQuestion(choice);
        });

        answers.appendChild(button);

    });
}


// 答えをチェック
function answerQuestion(answer) {

    // ゲーム終了後は押せない
    if (time <= 0 || life <= 0) {
        return;
    }


    if (answer === correctAnswer) {

        combo++;

        if (combo > bestCombo) {
            bestCombo = combo;
        }


        const points = 10 + combo * 5;

        score += points;


        if (combo >= 3) {

            message.textContent =
                `🔥 FEVER！！ ${combo} COMBO！！`;

        } else {

            message.textContent =
                `🎉 正解！ +${points}点`;

        }

        message.style.color = "#ff4f81";


        updateDisplay();

        // 次の問題
        createQuestion();


    } else {

        life--;

        combo = 0;

        message.textContent = "😵 ざんねん！";
        message.style.color = "#555";


        updateDisplay();


        if (life <= 0) {

            endGame();

        }

    }
}


// 画面を更新
function updateDisplay() {

    scoreDisplay.textContent = score;
    comboDisplay.textContent = combo;
    lifeDisplay.textContent = life;
    timerDisplay.textContent = time;

}


// ゲーム終了
function endGame() {

    clearInterval(timerInterval);

    gameScreen.classList.add("hidden");
    gameOverScreen.classList.remove("hidden");

    document.getElementById("final-score").textContent =
        score;

    document.getElementById("final-combo").textContent =
        bestCombo;
}

function selectDifficulty(level) {

    difficulty = level;

    // 難易度ごとの時間
    if (difficulty === "easy") {
        time = 40;
    }

    if (difficulty === "normal") {
        time = 30;
    }

    if (difficulty === "hard") {
        time = 20;
    }

    // 難易度選択画面を隠す
    document.getElementById("difficulty-screen")
        .classList.add("hidden");

    // ゲーム画面を表示
    document.querySelector(".status")
        .classList.remove("hidden");

    document.querySelector(".timer")
        .classList.remove("hidden");

    gameScreen.classList.remove("hidden");

    // ゲーム開始
    startGame();
}

function backToDifficulty() {

    // ゲームオーバー画面を隠す
    gameOverScreen.classList.add("hidden");

    // 難易度選択画面を表示
    document.getElementById("difficulty-screen")
        .classList.remove("hidden");
}

function showDifficulty() {

    // タイトル画面を隠す
    document.getElementById("title-screen")
        .classList.add("hidden");

    // 難易度選択画面を表示
    document.getElementById("difficulty-screen")
        .classList.remove("hidden");

}