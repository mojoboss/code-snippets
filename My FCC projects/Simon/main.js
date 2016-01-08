$(document).ready(function(){	

	//sequence of soundNodes
	var sequence;
	var tempSequence;   //sequence to store user clicks
	var level = 1;
	//interval b/w sounds in ms. Decreases in 5, 9th and 13th level.
	var interval = 2500;
	//boolean for indicating whether simon is on or off
	var on = false, start = false, strict = false;      
	//click handlers to change the light of buttons
	$('#onoff').click(function(){
        $(this).toggleClass('modeon');
        if(on == false){
        	on = true;
        	sequence = makeSequence();
        	tempSequence = [];
        	$('.steps').html(0);
        }
        else if(on == true){
        	on = false;
        	start = false;
        	$('.start').css('background-color', 'black');
        	$('.steps').html("");	
        	sequence = [];
        	tempSequence = [];
        	level = 1;
        	interval = 2500;
        }
    });
    //for strict mode
    $('#strict').click(function(){
    	$(this).toggleClass('modeon');
    	if(strict == false)
    		strict = true;
    	else if(strict == true)
    		strict = false;
    	//console.log(strict);
    });
	$('.start').click(function(){
		if(on == true && start == false){
			start = true;
        	//$(this).toggleClass('onStart');
        	$('.start').css('background-color', 'red');
        	$('.steps').html(level);
        	playSequence();
		}
    });
    //links to sound files
    var sounds = 
['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
	var buzzerSound = 'http://www.misc.it/suoni/campanello.wav';
	var winSound = 'http://www.startrekdesktopwallpaper.com/lcars/sounds/223.wav';
	//start a new game
	function startGame(){
		sequence = makeSequence();
		tempSequence = [];
		level = 1;
		$('.steps').html(level);
		interval = 2500;	
	}
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

	function levelUp(){
		level++;
		$('.steps').html(level);
		tempSequence = [];
		if(level == 5 || level == 9 || level == 13)
			interval -= 500;
		if(level == 21){
			play(winSound);
			$('.steps').html('You Won!!');
			window.setTimeout(startGame, 500);
		}
	}
	//function to respond to user click events
	$('#green').mouseup(function(){
		if(on == true && start == true){
			tempSequence.push(0);
			if(tempSequence[tempSequence.length-1] !== sequence[tempSequence.length-1]){
				play(buzzerSound);
				tempSequence = [];
				if(!strict)
					window.setTimeout(playSequence, 1000);
				else{
					startGame();
					window.setTimeout(playSequence, 1000);
				}
			}
			else{
				greenSound();
				if(tempSequence.length == level){
					levelUp();
					window.setTimeout(playSequence, 1000);		
				}
			}
		}
	});
	$('#red').mouseup(function(){
		if(on == true && start == true){
			tempSequence.push(1);
			if(tempSequence[tempSequence.length-1] !== sequence[tempSequence.length-1]){
				play(buzzerSound);
				tempSequence = [];
				if(!strict)
					window.setTimeout(playSequence, 1000);
				else{
					startGame();
					window.setTimeout(playSequence, 1000);
				}
			}
			else{
				redSound();
				if(tempSequence.length == level){
					levelUp();
					window.setTimeout(playSequence, 1000);		
				}
			}
		}
	});
	$('#yellow').mouseup(function(){
		if(on == true && start == true){
			tempSequence.push(2);
			if(tempSequence[tempSequence.length-1] !== sequence[tempSequence.length-1]){
				play(buzzerSound);
				tempSequence = [];
				if(!strict)
					window.setTimeout(playSequence, 1000);
				else{
					startGame();
					window.setTimeout(playSequence, 1000);
				}
			}
			else{
				yellowSound();
				if(tempSequence.length == level){
					levelUp();
					window.setTimeout(playSequence, 1000);		
				}
			}
		}
	});
	$('#blue').mouseup(function(){
		if(on == true && start == true){
			tempSequence.push(3);
			if(tempSequence[tempSequence.length-1] !== sequence[tempSequence.length-1]){
				play(buzzerSound);
				tempSequence = [];
				if(!strict)
					window.setTimeout(playSequence, 1000);
				else{
					startGame();
					window.setTimeout(playSequence, 1000);
				}
			}
			else{
				blueSound();
				if(tempSequence.length == level){
					levelUp();
					window.setTimeout(playSequence, 1000);		
				}
			}
		}
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
			//console.log(sound);
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

	
});



