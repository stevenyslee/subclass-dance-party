$(document).ready(function() {
  window.dancers = [];
  window.oldPositions = [];
  window.mj = false;

  $('#createLine').on('click', function(event) {
    var midLine = $("body").height() * .8;
    var distributionIncrement= $('body').width() / window.dancers.length;
    var distributionValues = Array(window.dancers.length).fill(1);
    for (var i = 1; i < distributionValues.length; i++) {
      distributionValues[i] = distributionValues[i-1] + distributionIncrement;
    }


    for (var j = 0; j < window.dancers.length; j++) {
      var vertical = window.dancers[j].position.top
      var horizontal = window.dancers[j].position.left
      window.oldPositions.push([vertical, horizontal]);
      window.dancers[j].isInLine = true;
      vertical = midLine;
      horizontal = distributionValues[j];
      window.dancers[j].setPosition(vertical, horizontal);
      };
  });

  $('#disbandLine').on('click', function(event) {
    window.oldPositions.reverse();
    for (var j = 0; j < window.dancers.length; j++) {
      var vertical = window.dancers[j].position.top
      var horizontal = window.dancers[j].position.left
      vertical = window.oldPositions[window.oldPositions.length-1][0];
      horizontal = window.oldPositions[window.oldPositions.length-1][1];
      window.oldPositions.pop();
      window.dancers[j].isInLine = false;
      window.dancers[j].setPosition(vertical, horizontal);
    };
  });

  $('#endMJ').on('click', function(event) {
    $(".dancer").removeClass("makeLine");
    window.oldPositions.reverse();
    for (var j = 0; j < window.dancers.length; j++) {
      var vertical = window.dancers[j].position.top
      var horizontal = window.dancers[j].position.left
      vertical = window.oldPositions[window.oldPositions.length-1][0];
      horizontal = window.oldPositions[window.oldPositions.length-1][1];
      window.oldPositions.pop();
      window.dancers[j].isInLine = false;
      window.dancers[j].setPosition(vertical, horizontal);
    };
  });

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var num = $("body").height() * Math.random() * .25; // this will get a number between 1 and 99;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    var dancer = new dancerMakerFunction(
      $("body").height() - num, //($("body").height() * Math.random()),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    if (dancer.isMJ && !window.mj ){
      $('body').append(dancer.$node);
      window.mj = true;
    } else if (!dancer.isMJ){
      $('body').append(dancer.$node);
    }
    dancer.isGhost || window.mj ? null : window.dancers.push(dancer);
  });


});
