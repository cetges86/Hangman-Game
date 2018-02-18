$(document).ready(function () {
    //all possible words, video game characters
    var words = ["Mario", "Luigi", "Donkey Kong", "Master Chief", "Link", "Sonic the Hedgehog",
        "Samus Aran", "Solid Snake", "Pikachu", "Bowser", "Princess Zelda", "Lara Croft", "Kratos",
        "Pac Man", "Scorpion", "Liu Kang", "Sub Zero", "Duke Nukem", "Nathan Drake"];

    var randomWord = words[Math.floor(Math.random() * words.length)];
    var spaces = randomWord.length;
    var blankSpace = 0;
    console.log(randomWord);
    console.log(spaces);

    for (i = 0; i < randomWord.length; i++) {
        var letter = randomWord.charAt(i).toUpperCase();
        if (letter === " ") {
            blankSpace++;
            $('#currentWord').append("    ");
        } else {
            $('#currentWord').append("<li class=" + letter + ">" + letter + "</li>");
        }

    };

    guessCount = 8;
    $('#guesses').append(" " + guessCount);
    //all potential guesses
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lettersSolved = 0 + blankSpace;
    //array that guesses are pushed into
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

            if (guessCount === 0) {
                $('#message').html("<h1>Game Over :( <br> Click below to reset game</h1>");
                var audio = new Audio('assets/images/smb_gameover.wav');
                audio.play();
                $('#reset').on("click", function () {
                    location.reload();
                })
            };

        } else if (position > -1 &&
            !lettersGuessed.includes(currentGuess) &&
            validLetter != -1) {

            lettersGuessed.push(currentGuess);
            $('#letters').html("Letters Guessed: <br>" + lettersGuessed);
            $('.' + currentGuess.toUpperCase() + '').addClass("revealed");

            for (k = 0; k < randomWord.length; k++) {
                $('.' + currentGuess.toUpperCase() + '').addClass("revealed");
                if (randomWord.charAt(k).toLowerCase() == currentGuess) {
                    lettersSolved += 1;
                    console.log(lettersSolved);
                };
            }
            if (lettersSolved == randomWord.length) {
                $('#message').html("<h1>You win! Click below to reset game</h1>");
                var audioWin = new Audio('assets/images/smb_world_clear.wav');
                audioWin.play();
                $('#reset').on("click", function () {
                    location.reload();
                })
            };
            
        } else if (lettersGuessed.includes(currentGuess)) {
            alert("Letter has already been guessed!");
        }
        else {
            alert("That key isn't even a letter!")
        };

    };

});

