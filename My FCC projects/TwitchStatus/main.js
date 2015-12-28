$(document).ready(function(){	
	var users = ["freecodecamp", "medrybw"];

	var offlinediv = '<div class="row"> \
			<div class="col-md-12 col-xs-12 twitch"> \
				<div class="row"> \
					<div class="col-md-4 col-xs-4"><img src="IMAGE" class="img-responsive image"></div> \
					<div class="col-md-5 col-xs-5"> \
						<div class="row  username">USERNAME</div> \
						<div class="row  description">DESCRIPTION</div> \
					</div> \
					<div class="col-md-3 col-xs-3"><i class="fa fa-exclamation-circle fa-2x redStatus"></i> </div> \
				</div> \
			</div> \
		</div>' ;

	var onlinediv = '<div class="row"> \
			<div class="col-md-12 col-xs-12 twitch"> \
				<div class="row"> \
					<div class="col-md-4 col-xs-4"><img src="IMAGE" class="img-responsive image"></div> \
					<div class="col-md-5 col-xs-5"> \
						<div class="row  username">USERNAME</div> \
						<div class="row  description">DESCRIPTION</div> \
					</div> \
					<div class="col-md-3 col-xs-3"><i class="fa fa-check-square fa-2x greenStatus"></i> </div> \
				</div> \
			</div> \
		</div>' ;

	for(var i=0; i<users.length; i++){
		var user = users[i];
		var streamEndpoint = "https://api.twitch.tv/kraken/streams/" + user;
		var userEndpoint = "https://api.twitch.tv/kraken/users/" + user;
		$.getJSON( streamEndpoint)
			.done(function( data ) {
				var stream = data.stream;
				if(stream == null){
					$.getJSON(userEndpoint)
						.done(function(dataUser){
							//console.log(dataUser.display_name, dataUser.logo);
							var temp = offlinediv;
							temp = temp.replace("IMAGE", dataUser.logo);
							temp = temp.replace("DESCRIPTION", "");
							temp = temp.replace("USERNAME", dataUser.display_name);
							//console.log(temp);
							$('.tab').append(temp);
						});
				}
				else{
					$.getJSON(userEndpoint)
						.done(function(dataUser){
							//console.log(dataUser.display_name, dataUser.bio, dataUser.logo);
							var temp = onlinediv;
							temp = temp.replace("IMAGE", dataUser.logo);
							temp = temp.replace("DESCRIPTION", dataUser.bio.slice(0, 25) + "..");
							temp = temp.replace("USERNAME", dataUser.display_name);
							//console.log(temp);
							$('.tab').append(temp);
						});
				}
			}); 

	}// end of for loop

});



