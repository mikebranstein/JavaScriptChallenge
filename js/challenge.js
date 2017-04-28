var countDownDate = addMinutes(new Date(), 2.016);

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = minutes + ':' + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    
    if (distance < 1000) {
        clearInterval(x);
        window.location = 'fail.html';
    }
}, 1000);

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

window.onload = function() {
    document.getElementById("testButton").addEventListener("click", function(){
        var code = document.getElementById("editor").value;
        
        var array = [2,3,7,1,5,6,0].toString();
        var result = eval(code + '\n challenge([' + array + ']);');
        var correctResult = [0,1,2,3,5,6,7];

        if (!Array.isArray(result)) {
            alert('Does not return an array!'); 
            return;
        }
        
        if (result.length == correctResult.length 
        && result.every(function(element, index) { return element === correctResult[index]; })) {
            window.location = 'success.html';
        } else {
            alert('INCORRECT');
        }
    });
}
