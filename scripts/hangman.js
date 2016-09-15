var hangman = function () {
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
  var _eventCheck = function(e) {
    var _letter = prompt('Enter a letter');
    var _input = _checkInput(_letter, e.target.dataset.loc);

    if(_input) {
      e.target.textContent = _letter;
      e.target.removeEventListener('click', _eventCheck);
    } else {
      alert('try again');
    }
  };

  // you need to check if the letter is correct and at the right location/index
  // click on div prompt a letter then go through logic
  var _listeners = function() {
    var boxes;
    _setWord();
    _makeBoxes();

    boxes = document.querySelectorAll('.letter-box');

    boxes.forEach(function(box) {
      box.addEventListener('click', _eventCheck);
    });
  };

  return {
    init: _listeners
  };
};
