$(document).ready(function () {
    //all possible words, video game characters
    var words = ["Mario", "Luigi", "Donkey Kong", "Master Chief", "Link", "Sonic the Hedgehog",
        "Samus Aran", "Solid Snake", "Pikachu", "Bowser", "Princess Zelda", "Lara Croft", "Kratos",
        "PacMan", "Scorpion", "Liu Kang", "Sub Zero", "Duke Nukem", "Nathan Drake", "Ganondorf", "Princess Peach", "Cloud", "Toad", "Yoshi", "Gordon Freeman",
        "Mega Man", "Kirby"];

    var images = ["mario.png", "luigi.png", "donkeykong.png", "masterchief.png", "link.png", "sonic.png",
        "samus.png", "solidsnake.png", "pikachu.png", "bowser.png", "zelda.png", "laracroft.png", "kratos.png",
        "pacman.png", "scorpion.png", "liukang.png", "subzero.png", "dukenukem.png", "nathandrake.png", "ganondorf.png", "peach.png", "cloud.png", "toad.png", "yoshi.png", "gordon.jpg",
        "megaman.png", "kirby.png"];

    var game = ["Super Mario Bros", "Super Mario Bros", "Donkey Kong Country and many others", "Halo", "The Legend of Zelda", "Sonic The Hedgehog Games",
        "The Metroid Series", "Metal Gear Solid", "Pokemon", "Super Mario Bros", "The Legend of Zelda", "Tomb Raider", "God of War", "Pac Man Games", "Mortal Kombat", "Mortal Kombat", "Mortal Kombat", "Duke Nukem Games", "Uncharted Series", "The Legend of Zelda", "Super Mario Bros.", "Final Fantasy VII", "Super Mario Bros", "Super Mario Bros", "Half Life 2", "Mega Man Games", "Kirby Games"];

    var randNumber = Math.floor(Math.random() * words.length);
    var randomWord = words[randNumber];
    var gameImage = images[randNumber];
    var gameName = game[randNumber];

    var blankSpace = 0;

    for (i = 0; i < randomWord.length; i++) {
        var letter = randomWord.charAt(i).toUpperCase();
        if (letter === " ") {
            blankSpace++;
            $('#currentWord').append("<br>");
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


    for(a = 0; a < alphabet.length; a++){
        $(".buttons").append("<button value=" + alphabet[a] + ">" + alphabet[a] + "</button>");
    };

    $(document).on('keyup click', function (event) {
        var currentGuess = '';
        if (event.key) {
            currentGuess = event.key;
        } else {
            currentGuess = $(event.target).val();
        }
                console.log(currentGuess);
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
                $('#message').html("<h2>Game Over :( <br> Click the button below to reset game</h2>");
                var audio = new Audio('assets/images/smb_gameover.wav');
                audio.play();
                $('#reset').on("click", function () {
                    location.reload();
                })
                $("li").addClass("revealed");
                $('#winImage').html("<h2>" + randomWord + "</h2><img src=assets/images/" + gameImage + ">");
                $('#message').append("<h2>" + gameName + "</h2>")

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
                $('#message').html("<h2>You win! Click below to reset game</h2>");
                var audioWin = new Audio('assets/images/smb_world_clear.wav');
                audioWin.play();
                $('audio')[0].pause();
                $('#reset').on("click", function () {
                    location.reload();
                })
                $('#winImage').html("<h2>" + randomWord + "</h2>" +
                    "<img src=assets/images/" + gameImage + ">");
                $('#message').append("<h2>" + gameName + "</h2>");

            };

        } else if (lettersGuessed.includes(currentGuess)) {
            alert("Letter has already been guessed!");
        }
        else {
            alert("That key isn't even a letter!")
        };

    });

});

