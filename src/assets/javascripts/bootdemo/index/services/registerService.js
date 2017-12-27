(function() {

	var registerService = function($http) {

		var register = function(credentials) {

			/*
			 * var data = 'j_username=' +
			 * encodeURIComponent(credentials.username) + '&j_password=' +
			 * encodeURIComponent(credentials.password);
			 */

			/*
			 * var datum = 'firstname=' + credentials.firstname + '&lastname=' +
			 * credentials.lastname + '&email=' + credentials.username +
			 * '&password=' + credentials.password; var data =
			 * JSON.stringify(datum); console.log(data);
			 */

			var data = {
				firstname : credentials.firstname,
				lastname : credentials.lastname,
				email : credentials.username,
				password : credentials.password
			}
			
			var jData = JSON.stringify(data);

			return $http.post('/boot-demo-0.1.0/user/register', jData, {
				headers : {
					'Content-Type': 'application/json'
				}
			}).then(
					function(response) {
						console.log("Registered : ")
						return "OK";
					});

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

	angular.module("bootdemo.index")
			.factory("registerService", registerService);
})();