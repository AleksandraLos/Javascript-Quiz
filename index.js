let darkModeBtn = document.getElementById("darkMode");
let div = document.getElementById("out");
let resultBtn = document.getElementById("result");



darkModeBtn.addEventListener("click", () => {
    let dark = document.body;
    dark.classList.toggle("dark-mode");
})

resultBtn.addEventListener("click", () => {
    let result = 0;
    if (document.getElementById("choiceCorrect").checked) {
        result++;
    }
    if (document.getElementById("sant1").checked) {
        result++;
    }
    if (document.getElementById("falskt2").checked) {
        result++;
    }
    if (document.getElementById("choiceA").checked) {
        result++;
    }
    if (document.getElementById("choiceD").checked) {
        result++;
    }
    if (document.getElementById("choiceG").checked) {
        result++;
    }

    if (
        document.getElementById("correct2").checked === true &&
        document.getElementById("correct3").checked === true &&
        document.getElementById("correct6").checked === true &&
        document.getElementById("correct7").checked === true &&
        document.getElementById("correct4").checked === false) {
        result++;
    } else {}

    let outcome = document.createElement("p");

    outcome.textContent = `Du har svarat rätt på ${result} frågor!`;
    div.appendChild(outcome);
    if (result == 7) {
        outcome.style.color = "#32CD32";
    } else if (result > 3) {
        outcome.style.color = "	#FFA500";
    } else {
        outcome.style.color = "#ff0000";
    }


});