app.controller("LoginPage",function($scope,javaservice,$remember){
	javaservice.PostLogin(obj).then(function(res){
		$scope.result=res;
	});
});