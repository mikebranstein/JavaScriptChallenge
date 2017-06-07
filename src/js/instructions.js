window.onload = function () {
    document.getElementById("goButton").addEventListener("click", function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        checkName(name);
        if (email.replace(/\s/g, '') == "") {
            document.getElementById("warning").innerHTML = "Please enter an Email.";
            document.getElementById("warning").setAttribute("style", "color: #ff3300");
            throw "MissingEmailException";
        }
         if (phone.replace(/\s/g, '') == "") {
            document.getElementById("warning").innerHTML = "Please enter a phone number.";
            document.getElementById("warning").setAttribute("style", "color: #ff3300");
            throw "MissingPhoneNumberException";
        }

        var newPhone = phone.replace("[^\\d.]", "")
        newPhone = newPhone.substring(0,3) + "-" + newPhone.substring(3,6) + "-" + newPhone.substring(6); 

        localStorage.setItem('playerName', name);
        localStorage.setItem('playerEmail', email);
        localStorage.setItem('playerPhone', newPhone);

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
    if (name.replace(/\s/g, '') == "") {
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
        document.getElementById('name').value = name.substring(0, 22);
        throw "InvalidLengthException";
    }
}
// function keyPress(){
//     if(document.getElementById("name").value.length >= 23){
//         alert("test");
//     }
// }