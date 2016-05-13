
$(document).ready(function(){
	
//global variables//
var guessCount = 0
var display = document.getElementById("displayCount");		
numGenerator();
var secretNum
var guess
var $guessButton = $("#guessButton");
function userFeedback(feedback) {
	$("#feedback").text(feedback);
};
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//Reload page for get new game//

$(".new").click(function() {
    location.reload();
});


//Make a Random Number//

function numGenerator() {
  secretNum = Math.floor((Math.random() * 100) + 1);
  console.log("Shh, the secret number is " +secretNum);
};


//Counter to increment # of guesses//
 // the button
 var btn = document.getElementById("guessButton");

 // the counter
 var counter = document.getElementById("displayCount");

 // set the counter to 0
 counter.innerHTML = 0;

 // increment the counter by 1 everytime the user clicks on the button
 btn.onclick = function()
 {
    counter.innerHTML++;
 };

//Store guesses and give feedback//

$guessButton.click(function(){
	var guess = $("#userGuess").val();
	$("form")[0].reset();		
	event.preventDefault();
	$("#guessList").append("<li>" + guess + "</li>");
	var diff = Math.abs(guess - secretNum);
	if(guess == secretNum){
		userFeedback("Congratulations! You guessed the secret number!");
	}
	else if(guess > 100 || guess < 1){
		userFeedback("Oops! Your number needs to be between 1-100!")
	}
	else if(diff <= 5) {
		userFeedback("You're really warm!")
	}
	else if(diff <= 10 && diff >= 6){
		userFeedback("You're pretty warm!");
	}
	else if(diff <= 20 && diff >=11 ){
		userFeedback("Luke Warm");
	}
	else if(diff <= 40 && diff >= 21){
		userFeedback("Chilly");
	}
	else if(diff <=90 && diff >=41){
		userFeedback("Ice Cold")
	}

});


});
