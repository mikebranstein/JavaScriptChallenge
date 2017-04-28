var countDownDate = addMinutes(new Date(), 2.016);

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = minutes + ':' + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

// function testCode() {
//     var code = document.getElementById('editor').textContent;
//     alert(code);
// }

window.onload = function() {
    document.getElementById("testButton").addEventListener("click", function(){
        var code = document.getElementById("editor").value;
        
        var firstArray = [2,3,7,1,5,6,0].toString();
        var firstTestActualResult = eval(code + '\n challenge([' + firstArray + ']);');
        var firstTestCorrectResult = [0,1,2,3,5,6,7];

        var correctStatus = (firstTestActualResult.length == firstTestCorrectResult.length) && (firstTestActualResult.every(function(element,index) {
            return element === firstTestCorrectResult[index];
        })) ? "You are correct!" : "You are NOT correct";

        alert("Test Array: " + firstArray + "   Your Sort: " + firstTestActualResult + "    Result: " + correctStatus);

    });
}

