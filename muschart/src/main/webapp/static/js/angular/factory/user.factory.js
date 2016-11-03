'use strict';
app.factory('UserFactory', ['$http', 'MESSAGE', 'REST', 'ValidatorService', function($http, MESSAGE, REST, ValidatorService) {

	function authentication(login, password, callback) {
		if (!ValidatorService.allNotEmpty(callback, login, password)) {
			return;
		}
		var headers = {authorization: "Basic " + btoa(login + ":" + password)};
		$http.get(REST.USER + '/auth' + REST.JSON_EXT, {'headers' : headers})
		.success(function(response) {
			if (response) {
				var data = {success: true, data: response};
				callback(data);
			} else {
				response = {success: false, message: MESSAGE.AUTHENTICATION_ERROR};
				callback(response);
			}
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.AUTHENTICATION_ERROR};
			callback(response);
		});
	}

	function logout() {
		$http.post(REST.USER + '/logout' + REST.JSON_EXT, {});
	}

	function createUser(login, password, confirmPassword, callback) {
		if (!ValidatorService.allNotEmpty(callback, login, password, confirmPassword)) {
			return;
		}
		$http.post(REST.USER + '/create/' + login + '/' + password + '/' + confirmPassword + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			var data = {success: false, message: response.message};
			callback(data);
		});
	}

	function getUser(callback) {
		$http.get(REST.USER + '/auth' + REST.JSON_EXT, {})
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_USER_ERROR};
			callback(response);
		});
	}

	function setUserLike(entity, entityId, callback) {
		if (!ValidatorService.allNotEmpty(callback, entity, entityId)) {
			return;
		}
		$http.post(REST.USER + '/like/' + entity + '/' + entityId + REST.JSON_EXT)
		.success(function(response) {
			response = {success: true};
			callback(response);
		})
		.error(function(response) {
			response = {success: false, message: response.message};
			callback(response);
		});
	}

	function checkLogin(login, callback) {
		if (!ValidatorService.allNotEmpty(callback, login)) {
			return;
		}
		$http.post(REST.USER + '/check/login/' + login + REST.JSON_EXT)
		.success(function(response) {
			if (response) {
				response = {success: true};
			} else {
				response = {success: false, message: MESSAGE.TAKEN_LOGIN_ERROR};
			}
			callback(response);
		})
		.error(function(response) {
			response = {success: false, message: response.message};
			callback(response);
		});
	}

	return {
		authentication: authentication,
		logout: logout,
		createUser: createUser,
		getUser: getUser,
		setUserLike: setUserLike,
		checkLogin: checkLogin
	};

}]);