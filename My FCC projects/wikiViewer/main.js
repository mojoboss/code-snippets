$(document).ready(function(){	
	var div = '<a href = "LINK"><div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 story">\
				<h3>HEADING</h3>\
				<p>BODY</p>\
			</div></a>';
	TriggerClick = 0;
	$(".searchBox").fadeOut(0.001);
	$(".btn").click(function(){
	  if(TriggerClick==0){
	       TriggerClick=1;
	       $(".searchBox").fadeIn();
	       $("#div2").animate({width:'60%'}, 400);
	  }else{
	       var value = $(".searchBox").val();
	       value = value.trim();
	       if(value.length ===0 ){
	       	   TriggerClick=0;
	       	   $("#div2").animate({width:'0%'}, 400);
	       	   $(".searchBox").val("");
	           $(".searchBox").fadeOut();
	       }
	       else
	       	   populate();
	  };
	});

	$(".searchBox").keypress(function(event) {
	    if (event.which == 13) {
	    	populate();	
	    }//if ends here
}); //key press event ends here

//function to search wikipedia
function populate(){
	$("h1").animate({'margin-top':'2%'}, 400);
    	$(".story").remove();
    	var text = $(".searchBox").val();
        console.log(text);
		// callback=? has to be added here in base url due to the fact that getJson wont work in CORS        
        var BaseUrl="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10\
        			&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?&gsrsearch=";
		$.getJSON( BaseUrl+text )
		.done(function( data ) {
			var responseArray = data.query.pages;
			//console.log(responseArray);
			$.each(responseArray, function(index){
				//console.log(index, responseArray[index]);
				var heading = responseArray[index].title;
				var body = responseArray[index].extract;
				var tempDiv = div;
				console.log(index, heading, body);
				tempDiv = tempDiv.replace("LINK", "https://en.wikipedia.org/?curid="+index);
				tempDiv = tempDiv.replace("HEADING", heading);
				tempDiv = tempDiv.replace("BODY", body);
				$(".divs").append(tempDiv);
			});
		});
}
//for auto-complete
	 var availableWords = [
	               "ActionScript",
	               "Boostrap",
	               "C",
	               "C++",
	               "Actionscript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy",
	               "Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"];
    $( ".searchBox" ).autocomplete({
       source: availableWords
    });

});



