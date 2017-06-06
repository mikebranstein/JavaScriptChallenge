window.onload = function () {
    function refresh() {
        loadScores(JSON.parse(localStorage.getItem('challengeOneScores')), document.getElementById('adminChallengeOne'));
        //loadScores(JSON.parse(localStorage.getItem('challengeTwoScores')), document.getElementById('challengeTwoTimes'));
        //loadScores(JSON.parse(localStorage.getItem('challengeThreeScores')), document.getElementById('challengeThreeTimes'));

        function loadScores(scores, board) {
            board.innerHTML = "";
            
            for (var i = 0; i < 5; i++) {
                    try {
                        board.innerHTML += "<div class=\"row\"> <div class=\" col-md-12 col-sm-8 \" >" + scores[i].name; /*+ "</div> <div class=\"col-md-4 col-sm-4\">" + arr[i].time + "</div></div>";*/
                    }catch(e){

                    }
                }
        }
    }
    refresh();
    // setInterval(function () {
    //     refresh();
    // }, 5000)

}