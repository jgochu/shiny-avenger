$(document).ready(function() {

  $(function() {

    var $distanceInput = $('input:text');
    var $racers = $('.racers');
    var $choiceTurtle = $('#turtle');
    var $choiceRabbit = $('#rabbit');
    var $race = $('#startRace');
    var $results = $('.raceResults');

    $racers.hide();
    $distanceInput.hide();
    $race.hide();
    $results.hide();

    $("#yes").click(function(){
      $("#yes, #no").hide();
      $("p").text("Alright, who wins the race?");
      $racers.show();
    });

    $("#no").click(function(){
      $(".raceQuestion").siblings()
        .hide();
      $("p").text("Maybe next time.")
    });

    $racers.click(function(){
      $("p").text("How long is the race?");
      $racers.hide();
      $distanceInput.show();
      $race.show();
    })

    if (click = $choiceTurtle) { //not working correctly
      var userChoice = turtle;
    } 
    if (click = $choiceRabbit) {
      var userChoice = rabbit;
    }
    console.log(userChoice);

    $race.on('click', function(beginRace){
      beginRace.preventDefault();

      var Animal = function(n,s,f) {
        this.name = n;
        this.speed = s;
        this.focus = f;
        this.position = 0;
        this.report = function() {
        return this.name + " is at " + this.position;
        };
      
      this.run = function() {
        if(this.focus > (Math.random() * 10)) {
          this.position += this.speed;
          if(this.focus < 5 && this.position - distance < distance / 2) {
          this.focus = 1;
          };
        }
      };
    };

    var turtle = new Animal("reo",2,8.5),
        rabbit = new Animal("kicks",8,4);

    function runRace() {
      while(turtle.position < distance && rabbit.position < distance) {
      turtle.run();
      rabbit.run();
      };
    };      
    var distance = $('input:text').val(); 
    console.log(userChoice);   
    runRace();
    console.log(distance);
    console.log(turtle.report());
    console.log(rabbit.report());
    $distanceInput.hide();
    $race.hide();
    $('p').text("The Winner Is...")

    function raceWinner() {
      if(turtle.position > rabbit.position) {
        var winner = turtle;
      } 
      else {
        var winner = rabbit;
      }
    }

    if(winner === turtle) {
      $('#winner').text("TURTLE")
    }
    else {
      $('#winner').text("RABBIT")
    };

    if(winner === turtle && userChoice === turtle) {
      $results.text("You chose the winner.");
    }
    else if(winner === turtle && userChoice === rabbit) {
      $('#results').text("You chose a loser.");
    }
    else if(winner === rabbit && userChoice === rabbit) {
      $('#results').text("You chose the winner.");
    }
    else {
      $('#results').text("You chose a loser.");
    };
    $results.show();
    });
  });
});