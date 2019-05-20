var counter = 0;

function userEntry() {
    counter++
    console.log(counter)
    var userGuess = document.getElementById("guessBox").value;

    if (userGuess === "A" || userGuess === "a") {
        document.getElementById("box_1").style.visibility = "visible"
    } else if (userGuess === "L" || userGuess === "l") {
        document.getElementById("box_2").style.visibility = "visible"
    } else if (userGuess === "I" || userGuess === "i") {
        document.getElementById("box_3").style.visibility = "visible"
    } else if (userGuess === "E" || userGuess === "e") {
        document.getElementById("box_4").style.visibility = "visible"
    } else if (userGuess === "N" || userGuess === "n") {
        document.getElementById("box_5").style.visibility = "visible"
    } else if (userGuess === "S" || userGuess === "s") {
        document.getElementById("box_6").style.visibility = "visible"
    } else {
        document.getElementById("wrong").innerHTML = userGuess
    }
    
    /*if (I couldn't figure out what to put here) {
        alert("Congratulations!  You won! =D")
    }*/

    if (counter >= 10) {
        alert("Sorry!  You lost.  Refresh the page to try again!")
    }
}