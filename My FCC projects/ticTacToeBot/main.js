$(document).ready(function(){	
	var playerSymbol = null;
	var botSymbol = null;
	var gameOn = true;
	var playerScore = 0;
	var botScore = 0;
	$("#myModal").modal('show'); //displays the modal after the page load
	$('#modalX').click(function(){  //click handlers for modal buttons
		playerSymbol = 'X';
		botSymbol = 'O';
		restart();
		window.setTimeout(firstMove ,500); //bot makes first move
		//console.log(playerSymbol, botSymbol, 'Xclicked');
	});
	$('#modalO').click(function(){
		playerSymbol = 'O';
		botSymbol = 'X';
		restart();
		window.setTimeout(firstMove ,500); //bot makes first move
		//console.log(playerSymbol, botSymbol, 'Oclicked');
	});

	//click handler for divs, draws X or O on the div
	$('.row div div').click(function(){
		if(gameOn){
			var val = $(this).html();
			if(val !== 'X' && val !== 'O'){
				$(this).html(playerSymbol);
				check();
				if(gameOn){
					window.setTimeout(botMove ,700);
					window.setTimeout(check ,1000);
				}
			}
		}
	});
	//function to change score
	function setScore(symbol){
		if(symbol == botSymbol){
			botScore += 1;
			$('#botScore').html("Bot's score : "+botScore);
			return botScore;
		}
		else if(symbol == playerSymbol){
			playerScore += 1;
			$('#playerScore').html("Your score : "+playerScore);
			return playerScore;
		}
	}
	//check whether X won or O
	function check(){
		var val1 = $('#id1').html();
		var val2 = $('#id2').html();
		var val3 = $('#id3').html();
		var val4 = $('#id4').html();
		var val5 = $('#id5').html();
		var val6 = $('#id6').html();
		var val7 = $('#id7').html();
		var val8 = $('#id8').html();
		var val9 = $('#id9').html();
		if(val1==val2 && val2==val3 && val1==val3 && val1!==""){
			gameOn = false;
			setScore(val1);
			$("#myModal").modal('show');
			$('#id1').css('background-color', 'green');
			$('#id2').css('background-color', 'green');
			$('#id3').css('background-color', 'green');
			return val1;
		}
		else if(val4==val5 && val5==val6 && val4==val6 && val4!==""){
			gameOn = false;
			setScore(val4);
			$("#myModal").modal('show');
			$('#id4').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id6').css('background-color', 'green');
			return val4;
		}
		else if(val7==val8 && val8==val9 && val7==val9 && val7!==""){
			gameOn = false;
			setScore(val7);
			$("#myModal").modal('show');
			$('#id7').css('background-color', 'green');
			$('#id8').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val7;
		}
		else if(val1==val4 && val4==val7 && val1==val7 && val1!==""){
			gameOn = false;
			setScore(val1);
			$("#myModal").modal('show');
			$('#id1').css('background-color', 'green');
			$('#id4').css('background-color', 'green');
			$('#id7').css('background-color', 'green');
			return val1;
		}
		else if(val2==val5 && val5==val8 && val2==val8 && val2!==""){
			gameOn = false;
			setScore(val2);
			$("#myModal").modal('show');
			$('#id2').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id8').css('background-color', 'green');
			return val2;
		}
		else if(val3==val6 && val6==val9 && val3==val9 && val3!==""){
			gameOn = false;
			setScore(val3);
			$("#myModal").modal('show');
			$('#id3').css('background-color', 'green');
			$('#id6').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val3;
		}
		else if(val1==val5 && val5==val9 && val1==val9 && val1!==""){
			gameOn = false;
			setScore(val1);
			$("#myModal").modal('show');
			$('#id1').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val1;
		}
		else if(val3==val5 && val5==val7 && val3==val7 && val3!==""){
			gameOn = false;
			setScore(val3);
			$("#myModal").modal('show');
			$('#id3').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id7').css('background-color', 'green');
			return val3;
		}
		else if(val1 !== "" &&val2 !== "" &&val3 !== "" &&val4 !== "" &&val5 !== "" &&val6 !== "" &&val7 !== "" &&val8 !== "" &&val9 !== ""){
			gameOn = false;
			$("#myModal").modal('show');
			return true;
		}
		else
			return false;
	}

	//restarts the game
	function restart(){
		$('#id1').html("");
		$('#id2').html("");
		$('#id3').html("");
		$('#id4').html("");
		$('#id5').html("");
		$('#id6').html("");
		$('#id7').html("");
		$('#id8').html("");
		$('#id9').html("");
		$('#id1').css('background-color', 'transparent');
		$('#id2').css('background-color', 'transparent');
		$('#id3').css('background-color', 'transparent');
		$('#id4').css('background-color', 'transparent');
		$('#id5').css('background-color', 'transparent');
		$('#id6').css('background-color', 'transparent');
		$('#id7').css('background-color', 'transparent');
		$('#id8').css('background-color', 'transparent');
		$('#id9').css('background-color', 'transparent');	
		gameOn = true;
	}
	//makes the bot's first move
	function firstMove(){
		var ran = Math.ceil(Math.random()*10);
		if(ran == 1){
			$('#id1').html(botSymbol);
			gameOn = true;
		}
		else if(ran == 3){
			$('#id3').html(botSymbol);	
			gameOn = true;
		}
		else if(ran == 7){
			$('#id7').html(botSymbol);	
			gameOn = true;
		}
		else if(ran == 9){
			$('#id9').html(botSymbol);	
			gameOn = true;
		}
		else{
			$('#id5').html(botSymbol);	
			gameOn = true;
		}
	}
	//makes the bot move
	function botMove(){
		if(gameOn){
			var val1 = $('#id1').html();
			var val2 = $('#id2').html();
			var val3 = $('#id3').html();
			var val4 = $('#id4').html();
			var val5 = $('#id5').html();
			var val6 = $('#id6').html();
			var val7 = $('#id7').html();
			var val8 = $('#id8').html();
			var val9 = $('#id9').html();
			//test for winning cases
			if( (equal(botSymbol, val2, val3) || equal(botSymbol, val4, val7) || equal(botSymbol, val5, val9)) && (val1=="") ){
				$('#id1').html(botSymbol);
				return null;
			}
			else if( (equal(botSymbol, val1, val3) || equal(botSymbol, val5, val8)) && (val2=="")){
				$('#id2').html(botSymbol);
				return null;
			}
			else if( (equal(botSymbol, val1, val2) || equal(botSymbol, val5, val7) || equal(botSymbol, val6, val9)) && (val3=="")){
				$('#id3').html(botSymbol);
				return null;
			}
			else if( (equal(botSymbol, val1, val7) || equal(botSymbol, val5, val6)) && (val4=="")){
				$('#id4').html(botSymbol);
				return null;
			}
			else if((equal(botSymbol, val2, val8) || equal(botSymbol, val4, val6) || equal(botSymbol, val1, val9) || equal(botSymbol, val3, val7)) && (val5=="")){
				$('#id5').html(botSymbol);
				return null;
			}
			else if((equal(botSymbol, val3, val9) || equal(botSymbol, val4, val5)) && (val6=="")){
				$('#id6').html(botSymbol);
				return null;
			}
			else if((equal(botSymbol, val1, val4) || equal(botSymbol, val3, val5) || equal(botSymbol, val8, val9)) && (val7=="")){
				$('#id7').html(botSymbol);
				return null;
			}
			else if((equal(botSymbol, val7, val9) || equal(botSymbol, val2, val5)) && (val8=="")){
				$('#id8').html(botSymbol);
				return null;
			}
			else if((equal(botSymbol, val7, val8) || equal(botSymbol, val1, val5) || equal(botSymbol, val3, val6)) && (val9=="")){
				$('#id9').html(botSymbol);
				return null;
			}
			//end of winning cases testing
			//block opponent
			else if((equal(playerSymbol, val2, val3) || equal(playerSymbol, val4, val7) || equal(playerSymbol, val5, val9)) && (val1=="")){
				$('#id1').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val1, val3) || equal(playerSymbol, val5, val8)) && (val2=="")){
				$('#id2').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val1, val2) || equal(playerSymbol, val5, val7) || equal(playerSymbol, val6, val9)) && (val3=="")){
				$('#id3').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val1, val7) || equal(playerSymbol, val5, val6)) && (val4=="")){
				$('#id4').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val2, val8) || equal(playerSymbol, val4, val6) || equal(playerSymbol, val1, val9) || equal(playerSymbol, val3, val7)) && (val5=="")){
				$('#id5').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val3, val9) || equal(playerSymbol, val4, val5)) && (val6=="")){
				$('#id6').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val1, val4) || equal(playerSymbol, val3, val5) || equal(playerSymbol, val8, val9)) && (val7=="")){
				$('#id7').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val7, val9) || equal(playerSymbol, val2, val5)) && (val8=="")){
				$('#id8').html(botSymbol);
				return null;
			}
			else if((equal(playerSymbol, val7, val8) || equal(playerSymbol, val1, val5) || equal(playerSymbol, val3, val6)) && (val9=="")){
				$('#id9').html(botSymbol);
				return null;
			}
			else{
				while(true){
					var ran = Math.ceil(Math.random()*10);
					console.log(ran);
					if(ran == 1){
						var val = $('#id1').html();
						if(val == ""){
							$('#id1').html(botSymbol);
							break;
						}
					}
					else if(ran == 2){
						var val = $('#id2').html();
						if(val == ""){
							$('#id2').html(botSymbol);
							break;
						}
					}
					else if(ran == 3){
						var val = $('#id3').html();
						if(val == ""){
							$('#id3').html(botSymbol);
							break;
						}
					}
					else if(ran == 4){
						var val = $('#id4').html();
						if(val == ""){
							$('#id4').html(botSymbol);
							break;
						}
					}
					else if(ran == 5){
						var val = $('#id5').html();
						if(val == ""){
							$('#id5').html(botSymbol);
							break;
						}
					}
					else if(ran == 6){
						var val = $('#id6').html();
						if(val == ""){
							$('#id6').html(botSymbol);
							break;
						}
					}
					else if(ran == 7){
						var val = $('#id7').html();
						if(val == ""){
							$('#id7').html(botSymbol);
							break;
						}
					}
					else if(ran == 8){
						var val = $('#id8').html();
						if(val == ""){
							$('#id8').html(botSymbol);
							break;
						}
					}
					else if(ran == 9){
						var val = $('#id9').html();
						if(val == ""){
							$('#id9').html(botSymbol);
							break;
						}
					}
				}
			}
		}
	}

	function equal(val1, val2, val3){
		if(val1 == val2 && val2 == val3 && val1 == val3)
			return true;
		else
			return false;
	}
});



