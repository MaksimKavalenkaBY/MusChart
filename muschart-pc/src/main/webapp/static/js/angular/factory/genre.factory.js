'use strict';
app.factory('GenreFactory', function($http, MESSAGE, REST, UtilityService) {

	function createGenre(name, callback) {
		if (!UtilityService.allNotEmpty(callback, name)) {
			return;
		}

		var genre = {
			name: name
		};

		$http.post(REST.GENRES, genre)
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
		if (!UtilityService.allNotEmpty(callback, id)) {
			return;
		}

		$http.delete(REST.GENRES + '/' + id)
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
		if (!UtilityService.allNotEmpty(callback, id)) {
			return;
		}

		$http.get(REST.GENRES + '/' + id)
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
		if (!UtilityService.allNotEmpty(callback, sort, order, page)) {
			return;
		}

		$http.get(REST.GENRES + '/' + sort + '/' + order + '/' + page)
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
		if (!UtilityService.allNotEmpty(callback, entity, entityId, sort, order, page)) {
			return;
		}

		$http.get(REST.GENRES + '/' + entity + '/' + entityId + '/' + sort + '/' + order + '/' + page)
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
		if (!UtilityService.allNotEmpty(callback, sort, order, page)) {
			return;
		}

		$http.get(REST.GENRES + '/user/' + sort + '/' + order + '/' + page)
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
		$http.get(REST.GENRES + '/all/id_name')
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
		$http.get(REST.GENRES + '/pages_count')
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
		if (!UtilityService.allNotEmpty(callback, entity, entityId)) {
			return;
		}

		$http.get(REST.GENRES + '/' + entity + '/' + entityId + '/pages_count')
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
		$http.get(REST.GENRES + '/user/pages_count')
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
		$http.post(REST.GENRES + '/check/genre_name', name)
		.success(function(response) {
			if (response) {
				response = {success: true, message: MESSAGE.EXIST_GENRE_ERROR};
			} else {
				response = {success: false};
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

});