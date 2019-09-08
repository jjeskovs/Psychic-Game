var wins = 0
var losses = 0
var tries = 9


// ask TA how to add the upper keys as well
var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var triesText = document.getElementById("tries")

document.onkeyup = function (event) {
    var userGuess = event.key
    var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)]

if (userGuess === computerGuess) {
    wins++
} else {losses++
        tries--  // is this correct?
}
if (tries === 0) {
    alert("GAME OVER");
    // document.location.reload();

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    tiesText.textContent = "Ties: " + ties;

}
}

