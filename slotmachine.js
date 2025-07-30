function rollFunction() {
    slotOne.textContent = Math.floor(Math.random() * 10);
    slotTwo.textContent = Math.floor(Math.random() * 10);
    slotThree.textContent = Math.floor(Math.random() * 10);
    outputText.classList.remove("hidden");
    if (slotOne.textContent == slotTwo.textContent && slotTwo.textContent == slotThree.textContent) {
        if (slotOne.textContent == 7) {
            outputText.textContent = "JACKPOT!!";
        }
        else {
            outputText.textContent = "Oh, nice!";
        }
    }
    else {
        outputText.textContent = "Oh, that's sad.";
    }
}

rollButton.onclick = rollFunction;
