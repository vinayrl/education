//# sourceMappingURL=bootdemo.task.js.map
(function(){angular.module("bootdemo.task",["bootdemo.core"])})();
(function(){function b(a){return a("/task/:action/:taskId",{taskId:"@id",action:"@action"},{show:{method:"GET"}},{save:{method:"POST"}},{"delete":{method:"DELETE"}})}function c(a){return a("/task/admin/:action/:taskId",{taskId:"@id",action:"@action"},{show:{method:"GET"}},{save:{method:"POST"}},{"delete":{method:"DELETE"}})}b.$inject=["DomainServiceFactory"];c.$inject=["DomainServiceFactory"];angular.module("bootdemo.task").factory("taskService",b).factory("taskServiceAdmin",c)})();
(function(){angular.module("bootdemo.task").config(["$stateProvider","$urlRouterProvider",function(b,c){b.state("task",{url:"/task",templateUrl:"/assets/bootdemo/task/templates/task.html",controller:"TaskListController as ctrl"}).state("task-create",{url:"/task/create",templateUrl:"/assets/bootdemo/task/templates/create.html",controller:"TaskCreateController as ctrl"}).state("task-edit",{url:"/task/edit/:taskId",templateUrl:"/assets/bootdemo/task/templates/create.html",controller:"TaskCreateController as ctrl"}).state("task-show",
{url:"/task/:taskId",templateUrl:"/assets/bootdemo/task/templates/show.html",controller:"TaskShowController as ctrl"})}])})();
(function(){angular.module("bootdemo.task").controller("TaskListController",["taskService",function(b){var c=this;b.list(function(a){c.tasks=a})}]).controller("TaskShowController",["taskService","taskServiceAdmin","$stateParams","$location",function(b,c,a,d){var e=this;b.show({taskId:a.taskId,action:"show"},function(a){e.task=a});e.delete=function(b){confirm("Are you sure you want to delete this task?")&&c.delete({action:"delete",taskId:a.taskId},b,function(a){d.path("/task")})}}]).controller("TaskCreateController",
["taskService","taskServiceAdmin","$stateParams","$location","$scope",function(b,c,a,d,e){var f=this;a.taskId&&b.show({taskId:a.taskId,action:"show"},function(a){f.task=a});f.save=function(a){c.save({action:"save",taskId:null},a,function(a){a.id?d.path("/task/"+a.id):alert("Unknown error occured")})}}])})();