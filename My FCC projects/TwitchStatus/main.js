$(document).ready(function(){	
	var users = ["freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx",
				"RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "SOOOO"];

	var offlinediv = '<a href="LINK"><div class="row userdiv"> \
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
		</div></a>' ;

	var onlinediv = '<a href="LINK"><div class="row userdiv"> \
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
		</div></a>' ;

	 var onlineUsers = [];
	 var offlineUsers = [];
	 var allUsers = [];
	for(var i=0; i<users.length; i++){
		var user = users[i];
		var streamEndpoint = "https://api.twitch.tv/kraken/streams/" + user;
		var userEndpoint = "https://api.twitch.tv/kraken/users/" + user;
		var tempData = {};
		tempData.channel = user;
		//json calls from here
		$.ajax({
	    	url: streamEndpoint,
	    	async: false,
	    	dataType: 'json',
	    	success: function(data) {
	    		tempData.stream = data.stream;
	    	},
	    	error: function(jqXHR, textStatus, errorThrown) {
 				tempData.stream = null;
 				console.log(textStatus, errorThrown);
			}
    	});
    	$.ajax({
	    	url: userEndpoint,
	    	async: false,
	    	dataType: 'json',
	    	success: function(data) {
	    		if(data.logo == null)
	    			tempData.logo = "http://lcautomation.co.uk/Resources/Images/1fbdf0d6-69ea-4af8-9fbe-ad77c01db8f1.jpg?w=74";
	    		else	
	    			tempData.logo = data.logo;
	    		if(data.bio !== null)
					tempData.desc = data.bio.slice(0, 25) + "..";
				else
					tempData.desc = "";
				tempData.username = data.display_name;
	    	},
	    	error: function(jqXHR, textStatus, errorThrown) {
 				tempData.logo = "http://lcautomation.co.uk/Resources/Images/1fbdf0d6-69ea-4af8-9fbe-ad77c01db8f1.jpg?w=74";
				tempData.desc = "";
				tempData.username = user;
 				console.log(textStatus, errorThrown);
			}
    	});
    	allUsers.push(tempData);
    	if(tempData.stream === null)
    		offlineUsers.push(tempData);
    	else
    		onlineUsers.push(tempData);
	}// end of for loop
	console.log(allUsers);

	//it is called for the first time when the page loads
	filldivs(allUsers);
	//then the functon is called after click events
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
	
	//function to fill the divs with user information stored in three array objects
	function filldivs(users){
		for(var i=0; i < users.length; i++){
			var obj = users[i];
			if(obj.stream == null){
				var temp = offlinediv;
				temp = temp.replace("IMAGE", obj.logo);
				temp = temp.replace("USERNAME", obj.username);
				temp = temp.replace("DESCRIPTION", "");
				temp = temp.replace("LINK", "http://www.twitch.tv/"+obj.channel);
				$(".tab").append(temp);
			}
			else{
				var temp = onlinediv;
				temp = temp.replace("IMAGE", obj.logo);
				temp = temp.replace("USERNAME", obj.username);
				temp = temp.replace("DESCRIPTION", obj.desc);
				temp = temp.replace("LINK", "http://www.twitch.tv/"+obj.channel);
				$(".tab").append(temp);
			}
		}
	}


});


