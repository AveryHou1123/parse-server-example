
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define("logUserAction", function(request, response) {
	
	var IGO_UserAction = Parse.Object.extend("IGO_UserAction");
	var userAction = new IGO_UserAction();
	userAction.set("page", request.params.pageName);
	userAction.set("marketingType", request.params.from);
	userAction.save(null,{
		success: function(cartCreated){
			response.success(true);
	    },
		error: function(err) {
			logger.send_error(logger.subject("logUserActivity", "save action"), err); 
			response.error(err);
		}		
	});
});
