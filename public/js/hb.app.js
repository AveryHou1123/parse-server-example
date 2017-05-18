//建立訂單
function logUserAction(pageName, userFrom) {
	Parse.Cloud.run("logUserActivity", 
		{	
			pageName : pageName,
			from : userFrom
		}, 
		{
		success: function(results) {
			window.location = "https://line.me/R/ti/p/%40vzr0464w"; //redirect to line@
		},
	 	error: function(error) {
	 		console.log("error:" + error);
	 	}
	});
}