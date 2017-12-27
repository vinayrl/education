//= wrapped

/*
    You can modify or extend the DomainServiceFactory but it is recommended that you not delete it.
*/

(function() {
    DomainServiceFactory.$inject = ["$resource"];
    angular
        .module("bootdemo.core")
        .factory("DomainServiceFactory", DomainServiceFactory);

    function DomainServiceFactory($resource) {
        return function(url, paramDefaults, actions, options) {
            var resourceActions = {"update": {method: "PUT"}, "list": {method: "GET", isArray: true}};
            angular.extend(resourceActions, actions);
//alert(paramDefaults);
            return $resource(
            	url,
                paramDefaults || null,
                resourceActions,
                options || {}
            );
        }
    }
}());
