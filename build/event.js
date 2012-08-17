// Generated by CoffeeScript 1.3.3
(function() {

  window.Event = (function() {
    var eventQueue, keyDowns;

    function Event() {}

    eventQueue = [];

    keyDowns = {};

    Event.TYPES = {
      click: 'click',
      dblclick: 'dblClick',
      mousedown: 'mouseDown',
      mousemove: 'mouseMoveScene',
      mouseup: 'mouseUp',
      mouseover: 'mouseOverScene',
      mouseout: 'mouseOutScene',
      keydown: 'keyDown',
      keypress: 'keyPress',
      keyup: 'keyUp'
    };

    Event.MOUSE_EVENT_TYPES = ['click', 'dblClick', 'mouseDown', 'mouseMove', 'mouseUp'];

    Event.addToQueue = function(evt) {
      return eventQueue.splice(0, 0, evt);
    };

    Event.removeFromQueue = function() {
      return eventQueue.pop();
    };

    Event.isEmpty = function() {
      return eventQueue.length === 0;
    };

    Event.dispatchEvent = function(evt) {
      return this.addToQueue(evt);
    };

    Event.isMouseEvent = function(evt) {
      return (this.MOUSE_EVENT_TYPES.indexOf(evt.type)) >= 0;
    };

    Event.keyDown = function(keyCode) {
      return keyDowns[keyCode] = true;
    };

    Event.keyUp = function(keyCode) {
      return delete keyDowns[keyCode];
    };

    Event.isKeyDown = function(keyCode) {
      return keyDowns[keyCode];
    };

    return Event;

  })();

}).call(this);