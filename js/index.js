function saveSelection(e) {
    var challengeNumber = e.id;

    localStorage.setItem('challengeNumber', challengeNumber);
    window.location = 'instructions'+challengeNumber+'.html';
}