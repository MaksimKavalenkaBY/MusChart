'use strict';
app.controller('GenreController', function($scope, $state, DEFAULT, STATE, GenreFactory, UserFactory, CookieService, FlashService, UtilityService) {

	$scope.url = '#';
	$scope.info = {};
	$scope.genres = [];

	$scope.createGenre = function() {
		$scope.dataLoading = true;
		GenreFactory.createGenre($scope.genre.name, function(response) {
			if (response.success) {
				FlashService.success(response.message);
			} else {
				FlashService.error(response.message);
			}
			$scope.dataLoading = false;
		});
	};

	$scope.deleteGenre = function(id) {
		GenreFactory.deleteGenre(id, function(response) {
			if (response.success) {
				FlashService.success(response.message);
			} else {
				FlashService.error(response.message);
			}
		});
	};

	$scope.like = function(genreId) {
		UserFactory.setUserLike(DEFAULT.ENTITY.genre, genreId, function(response) {
			if (response.success) {
				UtilityService.setLike($scope.genres, genreId);
			} else {
				FlashService.error(response.message);
			}
		});
	};

	$scope.menu = function(genreId) {
		for (var i = 0; i < $scope.genres.length; i++) {
			delete($scope.genres[i].menu);
			if ($scope.genres[i].id === genreId) {
				$scope.genres[i].menu = true;
			}
		}
	};

	$scope.hide = function() {
		for (var i = 0; i < $scope.genres.length; i++) {
			delete($scope.genres[i].menu);
		}
	};

	function init(state, sort, order, page) {
		switch (state) {
			case STATE.GENRES:
				$scope.url = '#';
				getGenres(sort, order, page);
				break;
			case STATE.GENRE:
			case STATE.GENRE_ARTISTS:
			case STATE.GENRE_TRACKS:
				getGenreById($state.params.id);
				break;
			case STATE.ARTIST:
				$scope.url = 'artist_genres({id: ' + $state.params.id + ', page: 1})';
				getEntityGenres('artist', $state.params.id, sort, order, 0);
				break;
			case STATE.TRACK:
				$scope.url = 'track_genres({id: ' + $state.params.id + ', page: 1})';
				getEntityGenres('track', $state.params.id, sort, order, 0);
				break;
			case STATE.ARTIST_GENRES:
				$scope.url = '#';
				getEntityGenres('artist', $state.params.id, sort, order, page);
				break;
			case STATE.TRACK_GENRES:
				$scope.url = '#';
				getEntityGenres('track', $state.params.id, sort, order, page);
				break;
			case STATE.USER_GENRES:
				$scope.url = '#';
				getUserGenres(sort, order, page);
				break;
		}
	}

	function getGenreById(id) {
		GenreFactory.getGenreById(id, function(response) {
			if (response.success) {
				$scope.info.data = response.data.name;
				$state.current.title = response.data.name;
			} else {
				FlashService.error(response.message);
			}
		});
	}

	function getGenres(sort, order, page) {
		GenreFactory.getGenres(sort, order, page, function(response) {
			if (response.success) {
				$scope.genres = response.data;
			} else {
				FlashService.error(response.message);
			}
		});
	}

	function getEntityGenres(entity, entityId, sort, order, page) {
		GenreFactory.getEntityGenres(entity, entityId, sort, order, page, function(response) {
			if (response.success) {
				$scope.genres = response.data;
			} else {
				FlashService.error(response.message);
			}
		});
	}

	function getUserGenres(sort, order, page) {
		GenreFactory.getUserGenres(sort, order, page, function(response) {
			if (response.success) {
				$scope.genres = response.data;
			} else {
				FlashService.error(response.message);
			}
		});
	}

	init($state.current.name, CookieService.getSettings().sort.genres, CookieService.getSettings().order.genres, $state.params.page);

});