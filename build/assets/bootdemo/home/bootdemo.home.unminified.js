//= wrapped
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates
//= require routes

angular.module("bootdemo.home", ["bootdemo.core"]);


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
    homeService.$inject = ["$http"];

    angular
        .module("bootdemo.home")
        .factory("homeService", homeService);

}());
/**
 * Created by hemraj on 17-03-2016.
 */
//= wrapped

(function() {

    var HomeController = function (homeService) {
        var self = this;        
    };
    HomeController.$inject = ["homeService"];

    angular
        .module("bootdemo.home")
        .controller("HomeController", HomeController);
}());
//= wrapped
(function() {

    angular.module('bootdemo.home')
		.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {		
			
			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/home/templates/home.html',
                    controller: 'HomeController as ctrl'
				})
				.state('logout', {
					url: "/logout",
					onEnter: ["homeService", "$location", "$rootScope", "$cookies", "$window", function(homeService, $location, $rootScope, $cookies, $window) {
						var onUserLogoutComplete = function(data){			    		
				    		$rootScope.authenticated = false;
							$cookies.remove("authenticated");
							$window.location.href = '/boot-demo-0.1.0';
				    	}
				    	
				    	homeService.logout().then(onUserLogoutComplete);
					}],
					controller: ["$state", function($state) {
					      $state.go('home');
					      $location.path("home");
					      location.reload();
					}]
					
				})
		}]);

}());
