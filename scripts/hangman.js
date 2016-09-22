// Letters you have guessed
// no alert
// no click
// input to test letters

// create input box for the letters
  // when you enter into the input and press enter it should check the fields for the correct letter

var Hangman = function () {
  var _dictionary = ['fatty', 'club', 'eat', 'food'];
  var _word = '';
  var _wordArr = [];

  // ideally I'll set it to a random word
  var _setWord = function() {
    _word = _dictionary[ Math.floor( Math.random() * _dictionary.length ) ];
    _wordArr = _word.split('');

    return _word;
  };

  // checks if the letter is there or not and returns true or false;
  // oh interesting I also have to check if it's in the right place too
  var _checkInput = function(letter, position) {
    var isCorrectPositionAndLetter = _word[position] === letter;

    if(isCorrectPositionAndLetter) {
      return true;
    } else {
      return false;
    }
  };

  // need to generate the board
  var _makeBoxes = function() {
    _wordArr.forEach(function(el, i){
      var _letter = document.createElement('div');
      var board = document.querySelector('.board');
  
      _letter.classList.add('letter-box');
      _letter.dataset.loc = i;

      board.appendChild(_letter);
    });
  };

  // used for adding letters to the div if it's correct then put the letter in and remove the eventlistener 
  // var _eventCheck = function(e) {
    // var _letter = prompt('Enter a letter');
    // var _input = _checkInput(_letter, e.target.dataset.loc);

    // if(_input) {
    //   e.target.textContent = _letter;
    //   e.target.removeEventListener('click', _eventCheck);
    // } else {
    //   alert('try again');
    // }
  // };

  var _getAllIndexes = function(str, val) {
    var indexes = [], i = -1;
    while ((i = str.indexOf(val, i+1)) != -1){
      indexes.push(i);
    }

    return indexes;
  };

  var _placeLetter = function(location, arr, letter) {
    arr.forEach(function(box) {
      if (box.dataset.loc === location.toString()) {
        box.innerHTML = letter;
      }
    });
  };

  var _compareKeypress = function(word, keypress) {
    var field = document.querySelectorAll('.letter-box');
    var index = _getAllIndexes(word, keypress);

    if (word[index] === keypress) {
      _placeLetter(index, field, keypress);
    }

    if (Array.isArray(index)) {
      // console.log(...index);
      for(var i = 0; i < index.length; i++) {
        _placeLetter(index[i], field, keypress);
      }
    }
  };

  var _keypressHandler = function (e) {
    var keyPress = e.key.toLowerCase();
    var allowed = ' a b c d e f g h i j k l m n o p q r s t u v w x y z '; 

    // TODO: Need to keep track of incorrect keypresses

    if(allowed.indexOf(keyPress) !== -1) {
      _compareKeypress(_word, keyPress);
    }
  };

  // you need to check if the letter is correct and at the right location/index
  // click on div prompt a letter then go through logic
  var _listeners = function() {
    // var boxes;

    _makeBoxes();
    window.addEventListener("keydown", _keypressHandler);


    // boxes = document.querySelectorAll('.letter-box');

    // boxes.forEach(function(box) {
    //   box.addEventListener('click', _eventCheck);
    // });
  };

  return {
    init: _listeners,
    answer: _setWord
  };
};
