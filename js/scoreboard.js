window.onload = function() {
    var challengeOneScores = localStorage.getItem('challengeOneScores');
    var challengeTwoScores = localStorage.getItem('challengeTwoScores');
    var challengeThreeScores = localStorage.getItem('challengeThreeScores');

    var challengeOneScoreboard = document.getElementById('challenge-one-scoreboard');
    var challengeTwoScoreboard = document.getElementById('challenge-two-scoreboard');
    var challengeThreeScoreboard = document.getElementById('challenge-three-scoreboard');

    if(challengeOneScores !== null) {
        challengeOneScoreboard.innerHTML = '';

        var parsedScores = JSON.parse(challengeOneScores);
        parsedScores.forEach(function(record) {
            challengeOneScoreboard.innerHTML += '<li>' + record.name + ': ' + record.time + '</li>';
        })
    }

    if(challengeTwoScores !== null) {
        challengeTwoScoreboard.innerHTML = '';

        var parsedScores = JSON.parse(challengeTwoScores);
        parsedScores.forEach(function(record) {
            challengeTwoScoreboard.innerHTML += '<li>' + record.name + ': ' + record.time + '</li>';
        })
    }

    if(challengeThreeScores !== null) {
        challengeThreeScoreboard.innerHTML = '';

        var parsedScores = JSON.parse(challengeThreeScores);
        parsedScores.forEach(function(record) {
            challengeThreeScoreboard.innerHTML += '<li>' + record.name + ': ' + record.time + '</li>';
        })
    }

    console.log(challengeOneScores);
    console.log(challengeTwoScores);
    console.log(challengeThreeScores);
}