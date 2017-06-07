window.onload = function () {
    function refreshAdminData() {
        loadScores(1, JSON.parse(localStorage.getItem('challengeOneScores')), document.getElementById('challengeTwoAdmin'));
        loadScores(2, JSON.parse(localStorage.getItem('challengeTwoScores')), document.getElementById('challengeThreeAdmin'));
        loadScores(3, JSON.parse(localStorage.getItem('challengeThreeScores')), document.getElementById('challengeOneAdmin'));

        function loadScores(num, scores, board) {
            board.innerHTML = "";
            if (scores !== null) {
            
                for (var i = 0; i < scores.length; i++) {
                    try {
                        board.innerHTML += "<div class=\"row\"> <div class=\" col-md-3 \" style=\"text-align:left;\">" + scores[i].name
                            + "</div> <div class=\"col-md-3 \">" + scores[i].email + "</div>"
                            + " <div class=\"col-md-3 \">" + scores[i].phone + "</div>"
                            + " <div class=\"col-md-3 \">" + scores[i].time + " <button style=\"color:red\" onclick=\"remove(" + num+","+ i+ ")\">Remove?</button></div></div>";
                    } catch (e) {

                    }
                }
            }
           
        };
    }
    refreshAdminData();
};
//All code belows is hacky and shitty
//I know. But Im just doing some last minute fixes

function remove(challenge,index) {
    var scores = [];
    var arr = new Array();
    if (challenge == 1)
        scores = JSON.parse(localStorage.getItem('challengeOneScores'));
    if (challenge == 2)
        scores = JSON.parse(localStorage.getItem('challengeTwoScores'));
    if (challenge == 3)
        scores = JSON.parse(localStorage.getItem('challengeThreeScores'));

    scores.splice(index,1);


    if (challenge == 1)
        localStorage.setItem('challengeOneScores', JSON.stringify(scores));
    if (challenge == 2)
        localStorage.setItem('challengeTwoScores', JSON.stringify(scores));
    if (challenge == 3)
        localStorage.setItem('challengeThreeScores', JSON.stringify(scores));
    location.reload();
}