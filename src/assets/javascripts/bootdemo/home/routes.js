//= wrapped
(function() {

    angular.module('bootdemo.home')
		.config(function($stateProvider, $urlRouterProvider) {		
			
			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/home/templates/home.html',
                    controller: 'HomeController as ctrl'
				})
				.state('logout', {
					url: "/logout",
					onEnter: function(homeService, $location, $rootScope, $cookies, $window) {
						var onUserLogoutComplete = function(data){			    		
				    		$rootScope.authenticated = false;
							$cookies.remove("authenticated");
							$window.location.href = '/boot-demo-0.1.0';
				    	}
				    	
				    	homeService.logout().then(onUserLogoutComplete);
					},
					controller: function($state) {
					      $state.go('home');
					      $location.path("home");
					      location.reload();
					}
					
				})
		});

}());