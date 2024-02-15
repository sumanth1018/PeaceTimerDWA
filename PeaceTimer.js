let twentySecondsBtnE1 = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnE1 = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnE1 = document.getElementById("fortySecondsBtn");
let oneMinuteBtnE1 = document.getElementById("oneMinuteBtn");
let timerTextE1 = document.getElementById("timerText");

function startTimer(countDown) {
    timerTextE1.value = "";
    let counter = countDown;
    let uniqueId = setInterval(function() {
        if (counter > 1) {
            counter -= 1;
            timerTextE1.textContent = counter + " seconds left";
        } else {
            clearInterval(uniqueId);
            timerTextE1.textContent = "Your moment is complete";
        }
    }, 1000);
    if (counter > 1) {
        counter -= 1;
    }
}

twentySecondsBtnE1.onclick = function twentySeconds() {
    let countDown = 22;
    startTimer(countDown);
};

thirtySecondsBtnE1.onclick = function twentySeconds() {
    let countDown = 32;
    startTimer(countDown);
};

fortySecondsBtnE1.onclick = function twentySeconds() {
    let countDown = 42;
    startTimer(countDown);
};

oneMinuteBtnE1.onclick = function twentySeconds() {
    let countDown = 62;
    startTimer(countDown);
};