$(document).ready(function(){	
	var users = ["freecodecamp", "medrybw", "freecodecamp", "freecodecamp"];

	var offlinediv = '<div class="row userdiv"> \
			<div class="col-md-12 col-xs-12 twitch"> \
				<div class="row"> \
					<div class="col-md-4 col-xs-4"><img src="IMAGE" class="img-responsive image"></div> \
					<div class="col-md-5 col-xs-5"> \
						<div class="row  username">USERNAME</div> \
						<div class="row  description">DESCRIPTION</div> \
					</div> \
					<div class="col-md-3 col-xs-3"><i class="fa fa-exclamation-circle fa-2x redStatus" style="color:red"></i> </div> \
				</div> \
			</div> \
		</div>' ;

	var onlinediv = '<div class="row userdiv"> \
			<div class="col-md-12 col-xs-12 twitch"> \
				<div class="row"> \
					<div class="col-md-4 col-xs-4"><img src="IMAGE" class="img-responsive image"></div> \
					<div class="col-md-5 col-xs-5"> \
						<div class="row  username">USERNAME</div> \
						<div class="row  description">DESCRIPTION</div> \
					</div> \
					<div class="col-md-3 col-xs-3"><i class="fa fa-check-square fa-2x greenStatus" style="color:green"></i> </div> \
				</div> \
			</div> \
		</div>' ;

	 var onlineUsers = [];
	 var offlineUsers = [];
	 var allUsers = [];
	for(var i=0; i<users.length; i++){
		var user = users[i];
		var streamEndpoint = "https://api.twitch.tv/kraken/streams/" + user;
		var userEndpoint = "https://api.twitch.tv/kraken/users/" + user;
		var tempData = {};
		//json calls from here
		$.ajax({
	    	url: streamEndpoint,
	    	async: false,
	    	dataType: 'json',
	    	success: function(data) {
	    		tempData.stream = data.stream;
	    	}
    	});
    	$.ajax({
	    	url: userEndpoint,
	    	async: false,
	    	dataType: 'json',
	    	success: function(data) {
	    		tempData.logo = data.logo;
				tempData.desc = data.bio.slice(0, 25) + "..";
				tempData.username = data.display_name;
	    	}
    	});
    	allUsers.push(tempData);
    	if(tempData.stream === null)
    		offlineUsers.push(tempData);
    	else
    		onlineUsers.push(tempData);
	}// end of for loop
	console.log(allUsers);

	filldivs(allUsers);
	$("#allbutton").click(function(){
		$(".userdiv").remove();
		filldivs(allUsers);
	});
	$("#onlinebutton").click(function(){
		$(".userdiv").remove();
		filldivs(onlineUsers);
	});
	$("#offlinebutton").click(function(){
		$(".userdiv").remove();
		filldivs(offlineUsers);
	});
	
	//function to fill the divs with user information
	function filldivs(users){
		for(var i=0; i < users.length; i++){
			var obj = users[i];
			if(obj.stream == null){
				var temp = offlinediv;
				temp = temp.replace("IMAGE", obj.logo);
				temp = temp.replace("USERNAME", obj.username);
				temp = temp.replace("DESCRIPTION", "");
				$(".tab").append(temp);
			}
			else{
				var temp = onlinediv;
				temp = temp.replace("IMAGE", obj.logo);
				temp = temp.replace("USERNAME", obj.username);
				temp = temp.replace("DESCRIPTION", obj.desc);
				$(".tab").append(temp);
			}
		}
	}


});


