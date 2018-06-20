var makeGhostlyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top - 200, left, timeBetweenSteps);
  this.$node.addClass('ghostlyDancer');
  this.isGhost = true;
};

makeGhostlyDancer.prototype = Object.create(makeDancer.prototype);
makeGhostlyDancer.prototype.constructor = makeGhostlyDancer;

makeGhostlyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var randomNumber = Math.round(Math.random());

  if (randomNumber === 1) {
    this.$node.toggle('fast', function() {
      // Animation complete.
    }).animate({
      opacity: 0.75,
      left: '+=50',
      top: '-=50'
    }, 5000, function() {
      // Animation complete.
    }).mouseover(function() {
      $('.ghostlyDancer').css('display', 'none');
    });

  } else {

    this.$node.toggle('fast', function() {
      // Animation complete.
    }).animate({
      opacity: 0.75,
      left: '-=50',
      top: '-=50'
    }, 5000, function() {
      // Animation complete.
    }).mouseover(function() {
      $('.ghostlyDancer').css('display', 'none');
    });

  }

};
