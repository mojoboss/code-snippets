$(document).ready(function(){	

	//sequence of soundNodes
	var sequence = [];
	var level = 10;
	var interval = 2500; // interval b/w sounds in ms. Decreases in 5, 9th and 13th level.
	$('.mode').click(function(){
        $(this).toggleClass('modeon');
    });

    //links to sound files
    var sounds = 
['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
	
	//function to play a sound
	function play(sound){
		var audio = new Audio(sound);
		audio.play();
	}

	//functions to make button produce sound and glow
	function greenSound(){
		$('#green').css('background-color', '#48f971');
		play(sounds[0]);
		window.setTimeout(function(){$('#green').css('background-color', '#00A74A');}, 500);
	}
	function redSound(){
		$('#red').css('background-color', 'red');
		play(sounds[1]);
		window.setTimeout(function(){$('#red').css('background-color', '#9F0F17');}, 500);
	}
	function yellowSound(){
		$('#yellow').css('background-color', 'yellow');
		play(sounds[2]);
		window.setTimeout(function(){$('#yellow').css('background-color', '#CCA707');}, 500);
	}
	function blueSound(){
		$('#blue').css('background-color', '#7c83f9');
		play(sounds[3]);
		window.setTimeout(function(){$('#blue').css('background-color', '#094A8F');}, 500);
	}

	//function to respond to user click events
	$('#green').mouseup(function(){
		greenSound();
	});
	$('#red').mouseup(function(){
		redSound();
	});
	$('#yellow').mouseup(function(){
		yellowSound();
	});
	$('#blue').mouseup(function(){
		blueSound();
	});

	//function to create a list of length 20 contaning sound no. from 0 to 3
	function makeSequence(){
		var seq = [];
		for(var i=0; i<20; i++){
			var rand = Math.floor(Math.random() * 4);
			seq.push(rand);
		}
		return seq;
	}
	
	//function to play the sequence
	function playSequence(){
		var time = 1000;
		for(var i=0; i<level; i++){
			var sound = sequence[i]; //gets the random sound to be played
			console.log(sound);
			if(sound==0){
				window.setTimeout(greenSound, time);
			}
			else if(sound==1){
				window.setTimeout(redSound, time);
			}
			else if(sound==2){
				window.setTimeout(yellowSound, time);
			}
			else if(sound==3){
				window.setTimeout(blueSound, time);
			}
			time += interval;
		}
	}

	sequence =  makeSequence();
	playSequence();
});



