var Winlose = function() {
  var createOverlay = function() {
    var _overlay = document.createElement('div');
    var _overlayContent = document.createElement('div');
    var body = document.querySelector('body');

    _overlay.classList.add('overlay');
    _overlayContent.classList.add('overlay-content');

    _overlay.appendChild(_overlayContent);

    body.appendChild(_overlay);

    whatHappened('YOU WIN!!!');
    playAgainButton();
  };

  // function that creates the the content for the overlay-content
  var whatHappened = function(str) {
    var _title = document.createElement('h1');
    var _overlayContent = document.querySelector('.overlay-content');

    _title.innerHTML = str;
    _title.classList.add('title');

    _overlayContent.appendChild(_title);

    return _overlayContent;
  };

  var playAgainButton = function() {
    var _yes = document.createElement('button');
    var _no = document.createElement('button');
    var _buttonContainer = document.createElement('div');
    var _question = document.createElement('p');
    var _overlayContent = document.querySelector('.overlay-content');

    _buttonContainer.classList.add('button-container');

    _question.innerHTML = 'Do you want to play again?';
    _yes.innerHTML = 'YES';
    _no.innerHTML = 'NO';

    _overlayContent.appendChild(_question);
    _buttonContainer.appendChild(_yes);
    _buttonContainer.appendChild(_no);
    _overlayContent.appendChild(_buttonContainer);

    return _overlayContent;
  };

  return {
    init: createOverlay
  };
};
