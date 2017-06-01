window.onload = function () {
    document.getElementById("goButton").addEventListener("click", function () {
        var name = document.getElementById('name').value;

        checkName(name);

        localStorage.setItem('playerName', name);

        var challengeNumber = localStorage.getItem('challengeNumber');


        switch (challengeNumber) {
            case '1':
                window.location = 'challenge1.html';
                break;
            case '2':
                window.location = 'challenge2.html';
                break;
            case '3':
                window.location = 'challenge3.html';
                break;
            default:
                return;
        }

    });
}
function checkName(name) {
    if (name == "") {
        document.getElementById("warning").innerHTML = "Please enter a name.";
        document.getElementById("warning").setAttribute("style", "color: #ff3300");
        throw "MissingNameException";
    }
    if (name.includes("<") || name.includes(">")) {
        document.getElementById("warning").innerHTML = "<No tags>";
        document.getElementById("warning").setAttribute("style", "color: #ff3300");
        throw "BadSymbolException";
    }
      if (name.length >= 23) {
        document.getElementById("warning").innerHTML = "22 character limit. Your name has been trimmed.";
        document.getElementById("warning").setAttribute("style", "color: #ff3300");
        document.getElementById('name').value = name.substring(0,22);
        throw "InvalidLengthException";
    }
}