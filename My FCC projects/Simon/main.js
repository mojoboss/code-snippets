$(document).ready(function(){	
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

	//function to respond to user click events
	$('#green').mouseup(function(){
		play(sounds[0]);
	});
	$('#red').mouseup(function(){
		play(sounds[1]);
	});
	$('#yellow').mouseup(function(){
		play(sounds[2]);
	});
	$('#blue').mouseup(function(){
		play(sounds[3]);
	});

});



