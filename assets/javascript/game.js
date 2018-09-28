//computer picks random number between 19-120
//display in box
//computer assigns each gem a number between 1-12
//if you click on gem, value adds to your value
//if value equals random number, you win, if over you lose
//add to tally each time


$(document).ready(function() {

    var gemOne = 0;
    var gemTwo = 0;
    var gemThree = 0;
    var gemFour = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;

      
    
    $("#randomNumber").text(numberToMatch);
    numberToMatch = Math.floor(Math.random() * 121) + 19;
    console.log();

    //gems random

    gemOne = Math.floor(Math.random() * 13) + 1;
    $("#gemOne").text(RandomGemOne);
    console.log();

    gemTwo = Math.floor(Math.random() * 13) + 1;
    $("#gemTwo").text(RandomGemTwo);
    console.log();

    gemThree = Math.floor(Math.random() * 13) + 1;
    $("#gemThree").text(RandomGemThree);
    console.log();

    gemFour = Math.floor(Math.random() * 13) + 1;
    $("#gemFour").text(RandomGemFour);
    console.log();


    };

    
    //when a button is clicked add value to score, could getvalue be useful?
    $(".button").on("click", function() {
        score = val(score) + //ugh you need to make this an array?;
        $("#score").text(score)
    }
    
    //win or lose, add to tally
    if (numberToMatch == score) {
        alert("Yay! You won!!");
        wins++;
    } else if (score > numberToMatch) {
        alert("Oh no! You went too high!!");
        losses++;
    }
    
    //reset
    
});