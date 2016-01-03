$(document).ready(function(){	
	var playerSymbol = null;
	var botSymbol = null;
	$("#myModal").modal('show'); //displays the modal after the page load
	$('#modalX').click(function(){  //click handlers for modal buttons
		playerSymbol = 'X';
		botSymbol = 'O';
		//console.log(playerSymbol, botSymbol, 'Xclicked');
	});
	$('#modalO').click(function(){
		playerSymbol = 'O';
		botSymbol = 'X';
		console.log(playerSymbol, botSymbol, 'Oclicked');
	});

	//click handler for divs, draws X or O on the div
	$('.row div div').click(function(){
		var val = $(this).html();
		if(val !== 'X' || val !== 'O')
		$(this).html(playerSymbol);
	});
	
});



