$(document).ready(function() {
  window.dancers = [];
  window.oldPositions = [];

  $('#createLine').on('click', function(event) {
      var midLine = $("body").height() * .7;

      for (var j = 0; j < window.dancers.length; j++) {
        var vertical = window.dancers[j].position.top
        var horizontal = window.dancers[j].position.left
        window.oldPositions.push(vertical);
        vertical = midLine;
        window.dancers[j].setPosition(vertical, horizontal);
      };
    });

    $('#disbandLine').on('click', function(event) {
      window.oldPositions.reverse();
      for (var j = 0; j < window.dancers.length; j++) {
        var vertical = window.dancers[j].position.top
        var horizontal = window.dancers[j].position.left
        vertical = window.oldPositions[window.oldPositions.length-1];
        window.oldPositions.pop();
        window.dancers[j].setPosition(vertical, horizontal);
      };
    });

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() - ($("body").height() * Math.random() * 3/5),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

});
