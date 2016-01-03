$(document).ready(function(){	
	var playerSymbol = null;
	var botSymbol = null;
	$("#myModal").modal('show'); //displays the modal after the page load
	$('#modalX').click(function(){  //click handlers for modal buttons
		playerSymbol = 'X';
		botSymbol = 'O';
		restart();
		//console.log(playerSymbol, botSymbol, 'Xclicked');
	});
	$('#modalO').click(function(){
		playerSymbol = 'O';
		botSymbol = 'X';
		restart();
		//console.log(playerSymbol, botSymbol, 'Oclicked');
	});

	//click handler for divs, draws X or O on the div
	$('.row div div').click(function(){
		var val = $(this).html();
		if(val !== 'X' || val !== 'O')
		$(this).html(playerSymbol);
		if (check()){
			$("#myModal").modal('show');
		};
	});
	
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
			$('#id1').css('background-color', 'green');
			$('#id2').css('background-color', 'green');
			$('#id3').css('background-color', 'green');
			return val1;
		}
		else if(val4==val5 && val5==val6 && val4==val6 && val4!==""){
			$('#id4').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id6').css('background-color', 'green');
			return val4;
		}
		else if(val7==val8 && val8==val9 && val7==val9 && val7!==""){
			$('#id7').css('background-color', 'green');
			$('#id8').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val7;
		}
		else if(val1==val4 && val4==val7 && val1==val7 && val1!==""){
			$('#id1').css('background-color', 'green');
			$('#id4').css('background-color', 'green');
			$('#id7').css('background-color', 'green');
			return val1;
		}
		else if(val2==val5 && val5==val8 && val2==val8 && val2!==""){
			$('#id2').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id8').css('background-color', 'green');
			return val2;
		}
		else if(val3==val6 && val6==val9 && val3==val9 && val3!==""){
			$('#id3').css('background-color', 'green');
			$('#id6').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val3;
		}
		else if(val1==val5 && val5==val9 && val1==val9 && val1!==""){
			$('#id1').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id9').css('background-color', 'green');
			return val1;
		}
		else if(val3==val5 && val5==val7 && val3==val7 && val3!==""){
			$('#id3').css('background-color', 'green');
			$('#id5').css('background-color', 'green');
			$('#id7').css('background-color', 'green');
			return val3;
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
	}
});



