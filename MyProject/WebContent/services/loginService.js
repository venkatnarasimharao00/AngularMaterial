app.service("javaservice",function($http,$window){
	this.PostLogin=function(){
		window.alert("hello.......");
		return $http.post("http://localhost:8081/MyProject/JavaController")
		.then(function(posRes){
			console.log(posRes);
			return posRes;
			},
			function(errRes){return errRes;});
	};
});