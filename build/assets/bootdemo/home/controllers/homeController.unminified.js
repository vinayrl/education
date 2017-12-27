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
