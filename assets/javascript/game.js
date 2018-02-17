$(document).ready(function () {
    //all possible words, video game characters
    var words = ["Mario", "Luigi", "DonkeyKong", "MasterChief", "Link", "SonictheHedgehog", "SamusAran", "SolidSnake", "Pikachu", "Bowser", "PrincessZelda", "LaraCroft", "Kratos", "PacMan", "Scorpion", "LiuKang", "SubZero", "DukeNukem", "NathanDrake"];



    var randomWord = words[Math.floor(Math.random() * words.length)];
    var spaces = randomWord.length;
    console.log(randomWord);
    console.log(spaces);

    for (i = 0; i < randomWord.length; i++) {
        var letter = randomWord.charAt(i).toUpperCase();
        $('#currentWord').append("<li class=" + letter + ">" + letter + "</li>");

    };

    guessCount = 10;
    $('#guesses').append(" " + guessCount);

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lettersSolved = 0;
    var lettersGuessed = [];

    document.onkeyup = function (event) {
        var currentGuess = event.key;
        var validLetter = alphabet.indexOf(currentGuess);
        console.log(currentGuess);
        var position = randomWord.toLowerCase().indexOf(currentGuess);



        if (position === -1 &&
            lettersSolved != randomWord.length &&
            !lettersGuessed.includes(currentGuess) &&
            validLetter != -1) {

            guessCount--;
            alert("Try again!");
            lettersGuessed.push(currentGuess);
            $('#letters').html("Letters Guessed:<br> " + lettersGuessed);
            $('#guesses').html("Guesses Remaining: " + guessCount);

        } else if (position > -1 &&
            lettersSolved != randomWord.length &&
            !lettersGuessed.includes(currentGuess) &&
            validLetter != -1) {

            lettersGuessed.push(currentGuess);
            $('#letters').html("Letters Guessed: <br>" + lettersGuessed);
            $('.' + currentGuess.toUpperCase() + '').addClass("revealed");

            for (i = 0; i < randomWord.length; i++) {
                if (randomWord.charAt(i) === currentGuess) {
                    lettersSolved++;
                };
            };

            for (j = 0; j < randomWord.length; j++) {
                    $('.' + currentGuess.toUpperCase() + '').addClass("revealed");
            };

            console.log(lettersSolved);

            if (lettersSolved === randomWord.length) {
                alert("You win!!");
            };    

        } else if (lettersGuessed.includes(currentGuess)) {
            alert("Letter has already been guessed!");
        } else {
            alert("That key isn't even a letter!")
        };

        


    };

});