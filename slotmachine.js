var rolls = 0;
var rollGoods = 0;
var jackpots = 0;

function rollFunction() {
    rollAmount.textContent = rolls += 1;
    slotOne.textContent = Math.floor(Math.random() * 10);
    slotTwo.textContent = Math.floor(Math.random() * 10);
    slotThree.textContent = Math.floor(Math.random() * 10);
    outputText.classList.remove("hidden");
    if (slotOne.textContent == slotTwo.textContent && slotTwo.textContent == slotThree.textContent && slotOne.textContent > 0) {
        if (slotOne.textContent == 7) {
            slots.classList.remove("rollGood");
            slots.classList.remove("rollFail");
            slots.classList.add("jackpot");
            outputText.textContent = "JACKPOT!!";
            jackpotAmount.textContent = jackpots += 1;
        }
        else {
            slots.classList.remove("rollFail");
            slots.classList.remove("jackpot");
            slots.classList.add("rollGood");
            outputText.textContent = "Oh, nice!";
            goodRollAmount.textContent = rollGoods += 1;
        }
    }
    else {
        slots.classList.remove("rollGood");
        slots.classList.remove("jackpot");
        slots.classList.add("rollFail");
        outputText.textContent = "Oh, that's sad.";
    }
}

rollButton.onclick = rollFunction;
