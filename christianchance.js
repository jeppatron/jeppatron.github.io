function respond() {
    var response = Math.round(Math.random() * 2);
    if (response == 1) {
        christianText.textContent = "B)";
    } else {
        christianText.textContent = "B(";
    }
}

enter.onclick = respond;