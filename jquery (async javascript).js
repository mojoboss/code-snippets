/*
Here on clicking a button with id '#submit-btn', we make a ajax function call in jQuery
using $.getJSON(). The first parameter is a base URL, and second is a dictionary of query
parametrs. $getJSON() is short form of ------->
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});


New York Times api is used in this case.

After that, .done() is used to parse the json and handle the response. Here data is the json response object. 
Its like this in this case--- >
{  
   "response":{  
      "meta":{  },
      "docs":[  
         {  },
         {  },
         {  },
         {  },
         {  },
         {  },
         {  },
         {  },
         {  },
         {  }
      ]
   }
}
I want to use docs, so the loop is iterating over 'data.response.docs'.
*/


$(document).on('click', '#submit-btn', function(){

        var newYorkTimesBaseUrl="http://api.nytimes.com/svc/search/v2/articlesearch.json?";

	$.getJSON( newYorkTimesBaseUrl, {
		'q': city,
		'fq': 'source:("The New York Times")',
		'api-key': YOUR KEY HERE
	})
	.done(function( data ) {
		var responseArray = data.response.docs;
		$.each(responseArray, function(index){
			var heading = responseArray[index].headline.main;
			var article = responseArray[index].lead_paragraph;
			console.log(heading, "\n"+article);		
		});
	});

});




