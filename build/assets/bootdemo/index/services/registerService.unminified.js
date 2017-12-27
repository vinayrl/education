(function() {

	var registerService = function($http) {

		var register = function(credentials) {

			console.log("Username : ", credentials.username);
			console.log("Password : ", credentials.password);

			var data = 'j_username=' + encodeURIComponent(credentials.username)
					+ '&j_password=' + encodeURIComponent(credentials.password);

			return $http.post('/boot-demo-0.1.0/user/register', data, {
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log("JSON in Login : " + JSON.stringify(response.data))
				return response.data;
			});
			return "hello";

		}

		return {
			register : register
		}

		/*
		 * var register = function register(credentials) {
		 * 
		 * console.log("Username : ", credentials.username);
		 * console.log("Password : ", credentials.password); }
		 */

	};
	registerService.$inject = ["$http"];

	angular.module("bootdemo.index")
			.factory("registerService", registerService);
})();
