//= wrapped
//= require_self
//= require_tree controllers
//= require_tree services
//= require routes

(function() {
    angular.module("bootdemo.index", ["bootdemo.core"]);
}());


//= wrapped

(function() {

    angular
        .module("bootdemo.index")
        .controller("IndexController", ['$rootScope',IndexController])
    	.controller("LoginController", ['indexService','$stateParams','$location', '$scope', '$rootScope', '$cookies', '$window', LoginController])
    	.controller("RegisterController", ['registerService' ,'$stateParams','$location', '$scope', '$rootScope', '$cookies', '$window', RegisterController]); 
    
    function IndexController($rootScope) {
        var vm = this;        
    }
    
    function RegisterController(registerService, $stateParams, $location, $scope, $rootScope, $cookies, $window){
    	var self = this;
    	self.credentials = {};
    	
    	self.register = function(){
    		
    		registerService.register(self.credentials);
    	}
    }
    
    function LoginController(indexService, $stateParams, $location, $scope, $rootScope, $cookies, $window) {
        var self = this;
        self.credentials = {};
        
        var onUserLoginComplete = function(data){        	
        	if (data.firstname) {        		
                $rootScope.authenticated = true;
                $cookies.put("authenticated", true);                  
                $window.location.href = '/boot-demo-0.1.0/home';
                
            } else {
            	alert("Not Authenticated");
                $rootScope.authenticated = false;
                $location.path("login");
                self.error = true;
                $cookies.put("authenticated", false);
            }
        	
        };

		self.credentials = {};
		
        self.login = function(){   	
        	indexService.login(self.credentials).then(onUserLoginComplete);
        }
                
    }    

}());
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
(function() {

	var registerService = function($http) {

		var register = function(credentials) {

			console.log("Username : ", credentials.username);
			console.log("Password : ", credentials.password);

			var data = 'j_username=' + encodeURIComponent(credentials.username)
					+ '&j_password=' + encodeURIComponent(credentials.password);

			return $http.post('/boot-demo-0.1.0/user/register', data, {
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log("JSON in Login : " + JSON.stringify(response.data))
				return response.data;
			});
			return "hello";

		}

		return {
			register : register
		}

		/*
		 * var register = function register(credentials) {
		 * 
		 * console.log("Username : ", credentials.username);
		 * console.log("Password : ", credentials.password); }
		 */

	};
	registerService.$inject = ["$http"];

	angular.module("bootdemo.index")
			.factory("registerService", registerService);
})();
//= wrapped

(function() {  
    
	angular.module("bootdemo.index")
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index', {
				url: "/",
				templateUrl: '/boot-demo-0.1.0/assets/bootdemo/index/templates/welcome.html',
				controller: 'IndexController as vm'	
			})
			.state('login', {
				url: "/login",
				templateUrl: '/boot-demo-0.1.0/assets/bootdemo/index/templates/login.html',
				controller: 'LoginController as ctrl'	
			})	
			.state('register', {
				url: "/register",
				templateUrl: '/boot-demo-0.1.0/assets/bootdemo/index/templates/register.html',
				controller: 'RegisterController as reg'	
			})
			
		}]);

}());
