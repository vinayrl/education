//= wrapped
(function() {
    
    angular.module("bootdemo.user")
		.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('user', {
					url: "/user",
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/user/templates/user.html',
					controller: "UserListController as ctrl"	
				})
				.state('user-create', {
					url: "/user/create",
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/user/templates/create.html',
					controller: "UserCreateController as ctrl"	
				})
				.state('user-edit', {
					url: "/user/edit/:userId",
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/user/templates/create.html',
					controller: "UserCreateController as ctrl"	
				})
				.state('user-show', {
					url: "/user/:userId",
					templateUrl: '/boot-demo-0.1.0/assets/bootdemo/user/templates/show.html',
					controller: "UserShowController as ctrl"	
				})
		}]);

}());
