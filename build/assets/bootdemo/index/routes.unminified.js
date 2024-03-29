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
