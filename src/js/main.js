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
        //alert(code);
        //debugger;
        var result = eval(code + 'challenge();');
        var correct = (result === 53) ? "You are correct!" : "You are NOT correct...";
        
        alert("Result: " + result + ",    " + correct);

    });
}

