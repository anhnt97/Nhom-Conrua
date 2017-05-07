var submitQuiz = (function() {
    console.log('submitted');

    // get each answer score
    function answerScore(qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
                // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    // calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));
    console.log("CalcScore: " + calcScore); // it works!



    // calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    // show score as "score/possible score"
    var showScore = "Đúng: " + calcScore + "/" + questionCounter;
    //document.write(showScore);
    document.getElementById('userScore').innerHTML = showScore;
})


/*var submitButton = ($(document).ready(function () {

    $('#submitButton').click(function () {
        $(this).addClass('hide');
    });

}))

*/