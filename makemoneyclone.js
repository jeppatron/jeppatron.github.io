var clicks = 0;
var count = 1;
var cost = 2;

function click() {
    clickOutput.textContent = clicks += count;
}

function increaseClicksandCost() {
    clicks -= cost;
    clickOutput.textContent = clicks;
    count += 2;
    cost += 2;
    clickCounter.textContent = count;
    clickCost.textContent = cost;
}

clickButton.onclick = click;
addCountButton.onclick = increaseClicksandCost;
