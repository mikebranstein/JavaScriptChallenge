window.onload = function () {
    function refresh() {
        // loadScores(JSON.parse(localStorage.getItem('challengeOneScores')), document.getElementById('adminChallengeOne'));
        // loadScores(JSON.parse(localStorage.getItem('challengeTwoScores')), document.getElementById('challengeTwoTimes'));
        // loadScores(JSON.parse(localStorage.getItem('challengeThreeScores')), document.getElementById('challengeThreeTimes'));
        var allScores = [];
        JSON.parse(localStorage.getItem('challengeOneScores')).array.forEach(function(element) {
            allScores.push(element);
        }, this);
        JSON.parse(localStorage.getItem('challengeTwoScores')).array.forEach(function(element) {
            allScores.push(element);
        }, this);
        JSON.parse(localStorage.getItem('challengeThreeScores')).array.forEach(function(element) {
            allScores.push(element);
        }, this);


        function loadScores(scores) { 
            var nameColumn = document.getElementById('adminName');
            var emailColumn = document.getElementById('adminEmail');
            var phoneColumn = document.getElementById('adminPhone');
            // for (var i = 0; i < 5; i++) {
            //         try {
            //             board.innerHTML += "<div class=\"row\"> <div class=\" col-md-12 col-sm-8 \" >" + scores[i].name; /*+ "</div> <div class=\"col-md-4 col-sm-4\">" + arr[i].time + "</div></div>";*/
            //         }catch(e){

            //         }
            //     }
        }
    }
   // refresh();
    // setInterval(function () {
    //     refresh();
    // }, 5000)

}