//= wrapped

(function() {

    var homeService = function ($http) {

    	var logout = function logout () {

    		return $http.post('/boot-demo-0.1.0/user/logout')
    			.then(function(response) {
    				console.log("JSON in Logout : " + JSON.stringify(response.data))
    				return response.data;
    			});    		
            
        }   	

    	return {       
        	logout : logout        	
        }
    };

    angular
        .module("bootdemo.home")
        .factory("homeService", homeService);

}());