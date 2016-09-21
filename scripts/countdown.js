var Timer = function () {
  var _time = 0;
  var _countdown;

  var _setTime = function(n) {
    _time = n + 1;
  };

  var _appendSeconds = function() {
    document.querySelector('.countdown-clock').innerHTML = _time;
  };

  var _setCountdown = function(answer) {
    _answer = answer;
    _countdown = setInterval(_loseTime, 1000);
  };

  var _loseTime = function() {
    _time = _time - 1;

    if(_time <= 0) {
      clearInterval(_countdown);

      _scrub();

      alert('Out of time');
      _fillAnswer(answer);
    } else {
      
      if(_checkBoxes()) {
        clearInterval(_countdown);
        alert('YAY! You win!');
      }
    }

    _appendSeconds();
  };

  var _fillAnswer = function(word) {
    var letters = document.querySelectorAll('.letter-box');

    letters.forEach(function(letter, index) {
      if(letter.innerText === '') {
        letter.innerText = word[letter.dataset.loc];
      }
    });

    return letters;
  };

  var _checkBoxes = function() {
    // just want to check if letter-box is all filled
    var letters = document.querySelectorAll('.letter-box');
    var completed = true;

    for (var i = 0; i < letters.length; i++) {

      if (letters[i].innerText === '') {
        completed = false;
      }
    }

    return completed;
  };

  var _scrub = function() {
    var board = document.querySelector('.board');
    var words = document.querySelectorAll('.letter-box');

    words.forEach(function(word) {
      var clone = word.cloneNode(true);
      board.appendChild(clone);

      board.removeChild(word);
    });
  };

  return {
    setTime: _setTime,
    init: _setCountdown
  };
};
