window.onload = function () {

    loadScores(JSON.parse(localStorage.getItem('challengeOneScores')), document.getElementById('challengeOneTimes'));
    loadScores(JSON.parse(localStorage.getItem('challengeTwoScores')), document.getElementById('challengeTwoTimes'));
    loadScores(JSON.parse(localStorage.getItem('challengeThreeScores')), document.getElementById('challengeThreeTimes'));

    function loadScores(scores, board) {
        if (scores !== null) {
            var arr = new Array();
            //converts the time from string to int value, for desc order
            scores.forEach(function (item) {
                seconds = (item.time.substring(0, 1) * 60) + item.time.substring(2);
                if (seconds > 0)
                    arr.push({ name: item.name, time: item.time, seconds: seconds });
            }, this);
            arr.sort(compareInt);
            arr.forEach(function (item) {
                board.innerHTML += "<div class=\"row\"> <div class=\" col-md-8 col-sm-6 \" style=\"text-align:left;\">" + item.name + "</div> <div class=\"col-md-4 col-sm-4\">" + item.time + "</div></div>";
            }, this);
        }
        function compareInt(B, A) {
            return parseInt(A.seconds) - parseInt(B.seconds);
        }
    }
}