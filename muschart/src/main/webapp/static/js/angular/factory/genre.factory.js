'use strict';
app.factory('GenreFactory', ['$http', 'MESSAGE', 'REST', 'ValidatorService', function($http, MESSAGE, REST, ValidatorService) {

	function createGenre(name, callback) {
		if (!ValidatorService.allNotEmpty(callback, name)) {
			return;
		}
		$http.post(REST.GENRES + '/create/' + name + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response, message: MESSAGE.CREATING_GENRE_SUCCESS};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.CREATING_GENRE_ERROR};
			callback(response);
		});
	}

	function deleteGenre(id, callback) {
		if (!ValidatorService.allNotEmpty(callback, id)) {
			return;
		}
		$http.delete(REST.GENRES + '/delete/' + id + REST.JSON_EXT)
		.success(function(response) {
			response = {success: true, message: MESSAGE.DELETING_GENRE_SUCCESS};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.DELETING_GENRE_ERROR};
			callback(response);
		});
	}

	function getGenreById(id, callback) {
		if (!ValidatorService.allNotEmpty(callback, id)) {
			return;
		}
		$http.get(REST.GENRES + '/' + id + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getGenres(sort, order, page, callback) {
		if (!ValidatorService.allNotEmpty(callback, sort, order, page)) {
			return;
		}
		$http.get(REST.GENRES + '/' + sort + '/' + order + '/' + page + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getEntityGenres(entity, entityId, sort, order, page, callback) {
		if (!ValidatorService.allNotEmpty(callback, entity, entityId, sort, order, page)) {
			return;
		}
		$http.get(REST.GENRES + '/' + entity + '/' + entityId + '/' + sort + '/' + order + '/' + page + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getUserGenres(sort, order, page, callback) {
		if (!ValidatorService.allNotEmpty(callback, sort, order, page)) {
			return;
		}
		$http.get(REST.GENRES + '/user/' + sort + '/' + order + '/' + page + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getAllGenresIdAndName(callback) {
		$http.get(REST.GENRES + '/all/id_name' + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getPagesCount(callback) {
		$http.get(REST.GENRES + '/pages_count' + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_ARTIST_ERROR};
			callback(response);
		});
	}

	function getEntityPagesCount(entity, entityId, callback) {
		if (!ValidatorService.allNotEmpty(callback, entity, entityId)) {
			return;
		}
		$http.get(REST.GENRES + '/' + entity + '/' + entityId + '/pages_count' + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function getUserPagesCount(callback) {
		$http.get(REST.GENRES + '/user/pages_count' + REST.JSON_EXT)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	function checkGenreName(name, callback) {
		$http.post(REST.GENRES + '/check_genre_name/' + name + REST.JSON_EXT)
		.success(function(response) {
			if (response) {
				response = {success: true};
			} else {
				response = {success: false, message: MESSAGE.EXIST_GENRE_ERROR};
			}
			callback(response);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_GENRE_ERROR};
			callback(response);
		});
	}

	return {
		createGenre: createGenre,
		deleteGenre: deleteGenre,
		getGenreById: getGenreById,
		getGenres: getGenres,
		getEntityGenres: getEntityGenres,
		getUserGenres: getUserGenres,
		getAllGenresIdAndName: getAllGenresIdAndName,
		getPagesCount: getPagesCount,
		getEntityPagesCount: getEntityPagesCount,
		getUserPagesCount: getUserPagesCount,
		checkGenreName: checkGenreName
	};

}]);