//# sourceMappingURL=taskService.js.map
(function(){function b(a){return a("/task/:action/:taskId",{taskId:"@id",action:"@action"},{show:{method:"GET"}},{save:{method:"POST"}},{"delete":{method:"DELETE"}})}function c(a){return a("/task/admin/:action/:taskId",{taskId:"@id",action:"@action"},{show:{method:"GET"}},{save:{method:"POST"}},{"delete":{method:"DELETE"}})}b.$inject=["DomainServiceFactory"];c.$inject=["DomainServiceFactory"];angular.module("bootdemo.task").factory("taskService",b).factory("taskServiceAdmin",c)})();