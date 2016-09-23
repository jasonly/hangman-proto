var Winlose = function() {
  var createOverlay = function() {
    var _overlay = document.createElement('div');
    var _overlayContent = document.createElement('div');
    var body = document.querySelector('body');

    _overlay.classList.add('overlay');
    _overlayContent.classList.add('overlay-content');

    _overlay.appendChild(_overlayContent);

    body.appendChild(_overlay);

    whatHappened();
  };

  var whatHappened = function() {
    var _title = document.createElement('h1');
    var _overlayContent = document.querySelector('.overlay-content');

    _title.innerHTML = 'OH?';

    _overlayContent.appendChild(_title);

    return _overlayContent;
  };

  return {
    init: createOverlay
  };
};
