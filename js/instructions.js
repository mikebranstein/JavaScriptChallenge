window.onload = function() {
    document.getElementById("goButton").addEventListener("click", function(){
        var name = document.getElementById('name').value;
        localStorage.setItem('playerName', name);

        window.location = 'challenge.html';
    });
}