//= wrapped
//= require_self
//= require routes
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain

(function() {

    angular.module("bootdemo.user", ["bootdemo.core"]);

}());
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
//= wrapped

(function() {

    userService.$inject = ["DomainServiceFactory"];
    userServiceAdmin.$inject = ["DomainServiceFactory"];
    authorityService.$inject = ["DomainServiceFactory"];
    angular
        .module("bootdemo.user")
        .factory("userService", userService)
        .factory("userServiceAdmin", userServiceAdmin)
        .factory("authorityService", authorityService);

    function authorityService(DomainServiceFactory) {    	
    	return DomainServiceFactory('/boot-demo-0.1.0/authority/:action/:authId',{authId:'@id',action:'@action'},    		
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );    	        
    }
    
    function userService(DomainServiceFactory) {
        return DomainServiceFactory('/boot-demo-0.1.0/user/:action/:userId',{userId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }
    
    /**
     * For admin access. URL is different. The reason for creating new service is angular resource does not
     * handled '/' in url when passed in action. so if I pass admin/save from controller then it will be /admin%2Fsave
     * check https://github.com/angular/angular.js/issues/1388#issue-6979382
     */
    function userServiceAdmin(DomainServiceFactory) {
        return DomainServiceFactory('/boot-demo-0.1.0/user/admin/:action/:userId',{userId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }
    

}());
//= wrapped

(function() {

    angular
        .module("bootdemo.user")
        .controller("UserListController", ['userService',UserListController])
        .controller("UserShowController", ['userService', 'userServiceAdmin', '$stateParams','$location',UserShowController])
        .controller("UserCreateController", ['userService', 'userServiceAdmin', 'authorityService', '$stateParams','$location', '$scope', UserCreateController])

    function UserListController(userService) {

        var self = this;
        userService.list(function(items){
            self.users = items;
        });

    }
    
    function UserShowController(userService, userServiceAdmin, $routeParams,$location){
        var self = this;
        userService.show({userId:$routeParams.userId,action:'show'},function(user){
            self.user = user;
        });
        self.delete = function(user){
            if(confirm("Are you sure you want to delete this user?")) {
            	userServiceAdmin.delete({action: 'delete',userId:$routeParams.userId}, user, function (res) {
                    $location.path("/user");

                })
            }
        }
    }

    function UserCreateController(userService, userServiceAdmin, authorityService, $routeParams, $location, $scope){
        var self = this;       
        
        authorityService.list(function(items){        	
        		$scope.authoroties = items;
        	
        });   
               
        if($routeParams.userId){
            userService.show({userId:$routeParams.userId,action:'show'},function(user){
                self.user = user;         
                $scope.selectedAuths = self.user.userAuthorities;
                
            });
        }    
        
        self.save = function(user){        	
        	if(user.userAuthorities == null){        		
        		self.user.userAuthorities = [];
        	}
        	
        	self.user.userAuthorities = $scope.selectedAuths;
        	
        	userServiceAdmin.save({action:'save',userId:null},user,function(res){            	
                if(res.id){
                    $location.path("/user/"+res.id);
                }else{
                    alert("Unknown error occured");
                }
            })
        }
        
        

    }
    


}());
