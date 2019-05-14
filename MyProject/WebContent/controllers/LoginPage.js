app.controller("LoginPage",function($scope,javaservice){
	javaservice.PostLogin().then(function(res){
		$scope.result=res;
	});
});