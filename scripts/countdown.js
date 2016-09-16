var Timer = function () {
  var _time = 0;
  var _countdown;

  var _setTime = function(n) {
    _time = n + 1;
  };

  var _appendSeconds = function() {
    document.querySelector('.countdown-clock').innerHTML = _time;
  };

  var _setCountdown = function() {
    _countdown = setInterval(_loseTime, 1000);
  };

  var _loseTime = function() {
    _time = _time - 1;

    if(_time <= 0) {
      clearInterval(_countdown);

      _scrub();
      alert('OUT OF TIME');
    }

    _appendSeconds();
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
