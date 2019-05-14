app.factory('$remember', function() {
    return function(name, values) {
        var cookie = username + '=';
        cookie += values + ';';
        var date = new Date();
        date.setDate(date.getDate() + 365);
        cookie += 'expires=' + date.toString() + ';';
        document.cookie = cookie;
    }
});
/*
app.factory('$forget', function() {
    return function(name) {
        var cookie = name + '=;';
        cookie += 'expires=' + (new Date()).toString() + ';';

        document.cookie = cookie;
    }
});
Then whenever a user successfully logs in cache the key using $remember:

$remember('my_cookie_name', response.user._id);
*/
app.service("javaservice",function($http){
	this.PostLogin=function(obj){
		return $http.post("http://desktop-lmsbpjg:8082/Ewheelz/LoginForm.jsp",{'username':username,'password':password})
		.then(function(posRes){
			console.log(posRes);
			return posRes;
			},
			function(errRes){return errRes;});
	};
});