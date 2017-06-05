var countDownDate = addMinutes(new Date(), 3.016);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML = minutes + ':' + seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    if (distance < 1000) {
        clearInterval(x);
        saveScore();
        window.location = 'fail.html';
    }
}, 1000);

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
window.onload = function () {
    var challengeNumber = localStorage.getItem('challengeNumber');

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setOptions({
        fontSize: "14pt"
    });


    switch (challengeNumber) {
        case '1':
            challengeOne();
            break;
        case '2':
            challengeTwo();
            break;
        case '3':
            challengeThree();
            break;
        default:
            return;
    }

}
function challengeOne() {
    document.getElementById("testButton").addEventListener("click", function () {
        var code = ace.edit("editor").getValue();

        var array = [2, 3, 7, 1, 5, 6, 0].toString();
        var result = eval(code + '\n challenge([' + array + ']);');
        var correctResult = [0, 1, 2, 3, 5, 6, 7];

        if (!Array.isArray(result)) {
            document.getElementById("warning").innerHTML = "Does not return an array!";
            document.getElementById("warning").setAttribute("style", "display:visible")
            $("#warning").fadeOut(2000);
            return;
        }

        if (result.length == correctResult.length
            && result.every(function (element, index) { return element === correctResult[index]; })) {
            saveScore();
            window.location = 'success.html';
        } else {
            document.getElementById("warning").innerHTML = "INCORRECT";
            document.getElementById("warning").setAttribute("style", "display:visible")
            $("#warning").fadeOut(2000);
        }
    });
}

function challengeTwo() {
    var editor = ace.edit("editor");
    editor.setOptions({
        readOnly: true,
        highlightActiveLine: false,
        highlightGutterLine: false
    });
    document.getElementById("testButton").addEventListener("click", function () {
        var answer1 = document.getElementById("answer1").value.replace(/\s/g, '').toLowerCase();
        var answer2 = document.getElementById("answer2").value.replace(/\s/g, '').toLowerCase();

        if (answer1 == "mynameisbob" && (answer2 == "undefined")) {
            window.location = 'success.html';
        } else {
            document.getElementById("warning").setAttribute("style", "display:visible")
            $("#warning").fadeOut(1800);
            return;
        }
        saveScore();
    });
}

function challengeThree() {
    document.getElementById("testButton").addEventListener("click", function () {
        var code = ace.edit("editor").getValue();

        var str = "Bacon";
        var result = eval(code + '\n challenge(\"' + str + '\");');


        if (!(typeof (result) === "string")) {
            document.getElementById("warning").innerHTML = "Not of type <b>string</b>!";
            document.getElementById("warning").setAttribute("style", "display:visible")
            $("#warning").fadeOut(2000);
            return;
        }

        if (result.length == str.length && result == "nocaB") {

            saveScore();
            window.location = 'success.html';
        } else {
            document.getElementById("warning").innerHTML = "INCORRECT";
            document.getElementById("warning").setAttribute("style", "display:visible")
            $("#warning").fadeOut(2000);
        }
    });
}



function saveScore() {
    var name = localStorage.getItem('playerName');
    var time = document.getElementById('timer').innerHTML;
    var challengeNumber = localStorage.getItem('challengeNumber');
    var challenge;
    var scores;

    switch (challengeNumber) {
        case '1':
            scores = localStorage.getItem('challengeOneScores');
            challenge = 'challengeOneScores';
            break;
        case '2':
            scores = localStorage.getItem('challengeTwoScores');
            challenge = 'challengeTwoScores';
            break;
        case '3':
            scores = localStorage.getItem('challengeThreeScores');
            challenge = 'challengeThreeScores';
            break;
        default:
            return;
    }

    addRecords(scores, name, time, challenge);
}

function addRecords(scores, name, time, challenge) {
    if (scores === null || scores === 'null')
        scores = [];

    var scoresObj = Array.isArray(scores) ? scores : JSON.parse(scores);

    scoresObj.push({
        name: name,
        time: time
    });

    localStorage.setItem(challenge, JSON.stringify(scoresObj));
}