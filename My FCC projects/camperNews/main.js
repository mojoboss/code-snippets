$(document).ready(function(){	
	var div = '<div class="col-md-2 col-xs-4 story"> \
				<a href="STORY"><img src="PHOTO" class="center-block" style="width:210px; height:200px;"></a> \
				<div class="col-md-12 storyDetail"> \
					<a href="STORY"><h4>HEADLINE</h4></a> \
					<a href="USERPROFILE"><h5>-by AUTHOR</h5></a> \
					<i class="fa fa-heart"></i>UPVOTES \
					<h6>Posted on- TIME</h6> \
				</div> \
			</div>';

	$.getJSON("http://www.freecodecamp.com/news/hot")
	.done(function( data ) {
		var responseArray = data;
		//console.log(responseArray.length);
		$.each(responseArray, function(index){
			var image = responseArray[index].author.picture;
			var storyLink = responseArray[index].link;
			var headline = responseArray[index].headline.slice(0, 20)+"..";
			var author = responseArray[index].author.username;
			var userprofile = "http://www.freecodecamp.com/"+author;
			var upvotes = responseArray[index].upVotes.length;
			var time = new Date(responseArray[index].timePosted).toDateString();
			//console.log(image, storyLink, headline, author, userprofile, upvotes, time);
			var temp = div;
			temp = temp.replace("STORY", storyLink);
			temp = temp.replace("STORY", storyLink);
			temp = temp.replace("PHOTO", image);
			temp = temp.replace("HEADLINE", headline);
			temp = temp.replace("USERPROFILE", userprofile);
			temp = temp.replace("AUTHOR", author);
			temp = temp.replace("UPVOTES", " "+upvotes);
			temp = temp.replace("TIME", time);
			$(".row").append(temp);

		});
	});

});



