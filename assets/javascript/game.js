//computer picks random number between 19-120
//display in box
//computer assigns each gem a number between 1-12
//if you click on gem, value adds to your value
//if value equals random number, you win, if over you lose
//add to tally each time

$(document).ready(function () {

    var wins = 0;
    var loss = 0;
    var playerTotal;
    var goalTotal;


    var createVals = function () {

            goalTotal = 0;
            playerTotal = 0;
            $("#goalTot").text(0);
            $("#playerTot").text(0);



            var createGoal = function () {
                    min = Math.ceil(19);
                    max = Math.floor(120);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
            }


            goalTotal = createGoal();
            $("#goalTot").text(goalTotal);


            var hiddenVal = function () {
                    min = Math.ceil(1);
                    max = Math.floor(12);
                    return (Math.floor(Math.random() * (max - min + 1)) + min);
            }

            for (i = 0; i < 4; i++) {
                    var gemVal = hiddenVal();
                    console.log(gemVal);
                    $("#gem" + (i + 1)).attr("gem-val", gemVal);
            }
    }
    createVals();


    var gemClicks = function () {

            var gemPress = parseInt($(this).attr("gem-val"));

            playerTotal = playerTotal + gemPress;
            $("#playerTot").text(playerTotal);


            var compareScores = function () {
                    if (goalTotal === playerTotal) {
                            wins++;
                            $("#winCount").text(wins);
                            $("#playerText").text("Winner! Select reset to try again.");

                    } else if (goalTotal < playerTotal) {
                            loss++;
                            $("#lossCount").text(loss);
                            $("#playerText").text("Bummer, you lost! Select reset to try again.");


                    } else { }

            }
            compareScores();
    }

    $("#reset").on("click", createVals);
    $(".gemButt").on("click", gemClicks);
});