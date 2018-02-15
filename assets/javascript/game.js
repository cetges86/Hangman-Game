$(document).ready(function () {
    //all possible words, video game characters
    var words = ["Mario", "Luigi", "DonkeyKong", "MasterChief", "Link", "SonictheHedgehog", "SamusAran", "SolidSnake", "Pikachu", "Bowser", "PrincessZelda", "LaraCroft", "Kratos", "PacMan", "Scorpion", "LiuKang", "SubZero", "DukeNukem", "NathanDrake"];



    var randomWord = words[Math.floor(Math.random() * words.length)];
    var spaces = randomWord.length;
    console.log(randomWord);
    console.log(spaces);

    for (i = 0; i < randomWord.length; i++) {
        $('#currentWord').append("<li>" + randomWord.charAt(i).toUpperCase() + "</li>");

    };

    guessCount = 10;
    $('#guesses').append(" " + guessCount);
    for (i = 10; i > 0; i--) {

    }
})