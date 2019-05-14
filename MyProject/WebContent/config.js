app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("page_one",{
		url:"/page_one",
		templateUrl:"templates/page_one.html",
		controller:"page_one"
	});
	$stateProvider.state("LoginPage",{
		url:"/LoginPage",
		templateUrl:"templates/LoginPage.html",
		controller:"LoginPage"
	});
	$urlRouterProvider.otherwise("LoginPage");
});