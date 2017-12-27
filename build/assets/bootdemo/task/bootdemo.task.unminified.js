//= wrapped
//= require_self
//= require_tree services
//= require routes
//= require_tree controllers
//= require_tree directives
//= require_tree domain

(function() {

    angular.module("bootdemo.task", ["bootdemo.core"]);

}());
//= wrapped

(function() {

    taskService.$inject = ["DomainServiceFactory"];
    taskServiceAdmin.$inject = ["DomainServiceFactory"];
    angular
        .module("bootdemo.task")
        .factory("taskService", taskService)
        .factory("taskServiceAdmin", taskServiceAdmin);

    function taskService(DomainServiceFactory) {
        return DomainServiceFactory('/task/:action/:taskId',{taskId:'@id',action:'@action'},
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
    function taskServiceAdmin(DomainServiceFactory) {
        return DomainServiceFactory('/task/admin/:action/:taskId',{taskId:'@id',action:'@action'},
            {"show": {method: "GET"}},
            {"save": {method: "POST"}},
            {"delete": {method: "DELETE"}}
        );
    }

}());
//= wrapped
(function() {
    
    
    angular.module("bootdemo.task")
		.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('task', {
					url: "/task",
					templateUrl: '/assets/bootdemo/task/templates/task.html',
					controller: "TaskListController as ctrl"	
				})
				.state('task-create', {
					url: "/task/create",
					templateUrl: '/assets/bootdemo/task/templates/create.html',
					controller: "TaskCreateController as ctrl"	
				})
				.state('task-edit', {
					url: "/task/edit/:taskId",
					templateUrl: '/assets/bootdemo/task/templates/create.html',
					controller: "TaskCreateController as ctrl"	
				})
				.state('task-show', {
					url: "/task/:taskId",
					templateUrl: '/assets/bootdemo/task/templates/show.html',
					controller: "TaskShowController as ctrl"	
				})
		}]);

}());
//= wrapped

(function() {

    angular
        .module("bootdemo.task")
        .controller("TaskListController", ['taskService',TaskListController])
        .controller("TaskShowController", ['taskService', 'taskServiceAdmin', '$stateParams','$location',TaskShowController])
        .controller("TaskCreateController", ['taskService', 'taskServiceAdmin', '$stateParams','$location', '$scope', TaskCreateController])

    function TaskListController(taskService) {

        var self = this;
        taskService.list(function(items){
            self.tasks = items;
        });

    }
    function TaskShowController(taskService, taskServiceAdmin, $routeParams,$location){
        var self = this;
        taskService.show({taskId:$routeParams.taskId,action:'show'},function(task){
            self.task = task;
        });
        self.delete = function(task){
            if(confirm("Are you sure you want to delete this task?")) {
            	taskServiceAdmin.delete({action: 'delete',taskId:$routeParams.taskId}, task, function (res) {
                    $location.path("/task");

                })
            }
        }
    }

    function TaskCreateController(taskService, taskServiceAdmin, $routeParams,$location, $scope){
        var self = this;
        if($routeParams.taskId){
            taskService.show({taskId:$routeParams.taskId,action:'show'},function(task){
                self.task = task;
            });
        }
        self.save = function(task){
            
        	taskServiceAdmin.save({action:'save',taskId:null},task,function(res){
                if(res.id){
                    $location.path("/task/"+res.id);
                }else{
                    alert("Unknown error occured");
                }
            })
        }

    }

}());
