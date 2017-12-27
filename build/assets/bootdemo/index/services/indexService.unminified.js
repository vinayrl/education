(function() {
    var indexService = function ($http) {
    	
    	var login = function login (credentials) {
    		
            var data = 'j_username=' + encodeURIComponent(credentials.username) +
                '&j_password=' + encodeURIComponent(credentials.password);                

            return $http.post('/boot-demo-0.1.0/user/login', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response) {
	    		console.log("JSON in Login : " + JSON.stringify(response.data))
	    		return response.data;
            });
            
        }
    	
    	
        return {        
        	login : login        	
        }
        
    };
    indexService.$inject = ["$http"];


    angular
        .module("bootdemo.index")
        .factory("indexService", indexService);
}());
