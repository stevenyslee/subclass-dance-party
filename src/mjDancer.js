var mjDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.isMJ = true;
};

mjDancer.prototype = Object.create(makeDancer.prototype);
mjDancer.prototype.constructor = mjDancer;

mjDancer.prototype.thriller = function() {
  var idealDistance = 300;
  
  var mjNode = this.$node;
  for (var j = 0; j < window.dancers.length; j++) {
    var mjTop = parseInt(mjNode.css('top'), 10);
    var mjLeft = parseInt(mjNode.css('left'), 10);
    if (!window.dancers[j].isMJ) {
      var dancerTop = parseInt(window.dancers[j].$node.css('top'), 10);
      var dancerLeft = parseInt(window.dancers[j].$node.css('left'), 10);
    }
    var distance = Math.abs(Math.sqrt(Math.pow(mjTop, 2) + Math.pow(mjLeft, 2)) - Math.sqrt(Math.pow(dancerTop, 2) + Math.pow(dancerLeft, 2)));
    if (distance <= idealDistance) {
      window.dancers[j].$node.addClass('spin');
      setTimeout(function () {
        window.dancer[j].$node.removeClass('spin');
      }, 2000); 
    }
  }

};

mjDancer.prototype.step = function() {
  this.thriller();
  makeDancer.prototype.step.call(this, 150);
};