var wins = 0
var losses = 0
var tries = 9

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById("tries").innerHTML = "You have " + tries + " tries left";
    
// ask TA how to add the upper keys as well
var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)]
console.log(computerGuess)

function resetGame() {
    computerGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(computerGuess)
    document.getElementById("lettersGuessed").innerHTML = "";
    tries = 9
    document.getElementById("tries").innerHTML = "You have " + tries + " tries left";
} 

document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase()
    
    if (gameChoices.indexOf(userGuess) !== -1){
                
        document.getElementById("lettersGuessed").innerHTML += userGuess + ", ";
                       
        if (userGuess === computerGuess) {
            alert("You Win!!!");
            wins++;
            document.getElementById('wins').innerHTML = "Wins: " + wins;
            resetGame();
        }else { 
            tries--  
            document.getElementById("tries").innerHTML = "You have " + tries + " tries left";
        }
        if (tries === 0) {
            
            alert("GAME OVER");
            losses++
            document.getElementById('losses').innerHTML = "Losses: " + losses;
            resetGame()
        }
        
        
        
    }
    
}