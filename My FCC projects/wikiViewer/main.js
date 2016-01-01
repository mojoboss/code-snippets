$(document).ready(function(){	
	TriggerClick = 0;
	$(".btn").click(function(){
	  if(TriggerClick==0){
	       TriggerClick=1;
	       $("#div2").animate({width:'60%'}, 500);
	  }else{
	       TriggerClick=0;
	       $("#div2").animate({width:'0%'}, 500);
	  };
	});

});



