'use strict';
app.service('FileService', ['$http', 'MESSAGE', 'REST', function($http, MESSAGE, REST) {
	return {

		uploadFile: function(file, type, callback) {
			var formData = new FormData();
			formData.append('file', file);
			$http.post(REST.UPLOAD + '/' + type + REST.JSON_EXT, formData, {
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			})
			.success(function(response) {
				response = {success: true};
				callback(response);
			})
			.error(function(response) {
				response = {success: false, message: MESSAGE.SAVING_FILE_ERROR};
				callback(response);
			});
		}

	};
}]);