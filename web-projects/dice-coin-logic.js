const diceFace = document.getElementById("diceFace");
const diceResultsText = document.getElementById("diceResults");
const diceTotalText = document.getElementById("diceTotal");
const rollHistoryContainer = document.getElementById("rollHistory");

let rollHistory = [];

const coin = document.getElementById("coin");
const coinResult = document.getElementById("coinResult");

const totalFlipsText = document.getElementById("totalFlips");
const headsCountText = document.getElementById("headsCount");
const tailsCountText = document.getElementById("tailsCount");
const headsPercentageText = document.getElementById("headsPercentage");

let coinFlips = 0;
let headsCount = 0;
let tailsCount = 0;

const dicePatterns = {
    1: [4],

    2: [0, 8],

    3: [0, 4, 8],

    4: [0, 2, 6, 8],

    5: [0, 2, 4, 6, 8],

    6: [0, 2, 3, 5, 6, 8]
};

function showDiceFace(number) {

    const dots = diceFace.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.style.visibility = "hidden";
    });

    dicePatterns[number].forEach(index => {
        dots[index].style.visibility = "visible";
    });
}

function rollDice() {

    const diceCount = Number(document.getElementById("diceCount").value);

    let diceResult = [];
    let total = 0;

    for (let i = 0; i < diceCount; i++) {

        const randomNumber = Math.floor(Math.random() * 6) + 1;

        diceResult.push(randomNumber);

        total += randomNumber;
    }

    showDiceFace(diceResult[0]);

    diceResultsText.textContent =
        "Results: " + diceResult.join(", ");

    diceTotalText.textContent =
        "Total: " + total;

    rollHistory.unshift(
        `${diceResult.join("-")} = ${total}`
    );

    if (rollHistory.length > 5) {
        rollHistory.pop();
    }

    displayRollHistory();
}

function displayRollHistory() {

    rollHistoryContainer.innerHTML = "";

    rollHistory.forEach(item => {

        const historyPill = document.createElement("div");

        historyPill.classList.add("history-pill");

        historyPill.textContent = item;

        rollHistoryContainer.appendChild(historyPill);
    });
}

function flipCoin() {

    const randomNumber = Math.random();

    if (randomNumber < 0.5) {

        coin.textContent = "H";

        coin.classList.remove("tails");
        coin.classList.add("heads");

        coinResult.textContent = "Heads!";

        headsCount++;

    } else {

        coin.textContent = "T";

        coin.classList.remove("heads");
        coin.classList.add("tails");

        coinResult.textContent = "Tails!";

        tailsCount++;
    }

    coinFlips++;

    updateStats();
}

function updateStats() {

    totalFlipsText.textContent = coinFlips;

    headsCountText.textContent = headsCount;

    tailsCountText.textContent = tailsCount;

    let percentage = 0;

    if (coinFlips > 0) {
        percentage =
            ((headsCount / coinFlips) * 100).toFixed(1);
    }

    headsPercentageText.textContent =
        percentage + "%";
}

function resetStats() {

    coinFlips = 0;
    headsCount = 0;
    tailsCount = 0;

    updateStats();

    coin.textContent = "H";

    coin.classList.remove("tails");
    coin.classList.add("heads");

    coinResult.textContent = "Heads!";
}

showDiceFace(1);