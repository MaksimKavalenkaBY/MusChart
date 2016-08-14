'use strict';
app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);
app.config(['$stateProvider', '$urlRouterProvider', 'CONTROLLER', 'PATH', 'STATE', 'URL', function($stateProvider, $urlRouterProvider, CONTROLLER, PATH, STATE, URL) {
	var mainHeader = {
		controller: CONTROLLER.USER_EDIT_CONTROLLER,
		controllerAs: CONTROLLER.CTRL,
		templateUrl: PATH.MAIN_HEADER
	}
	var authenticationHeader = {
		templateUrl: PATH.AUTHENTICATION_HEADER
	}
	var editHeader = {
		templateUrl: PATH.EDIT_HEADER
	}
	var footer = {
		templateUrl: PATH.FOOTER
	}
	$stateProvider
	.state(STATE.SETTINGS, {
		url: URL.SETTINGS,
		views: {
			header: mainHeader,
			tool: {
				templateUrl: PATH.SETTINGS_TOOL
			}
		}
	})
	.state(STATE.LOGIN, {
		url: URL.LOGIN,
		views: {
			header: authenticationHeader,
			content: {
				controller: CONTROLLER.USER_EDIT_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.LOGIN_FORM
			}
		}
	})
	.state(STATE.REGISTER, {
		url: URL.REGISTER,
		views: {
			header: authenticationHeader,
			content: {
				controller: CONTROLLER.USER_EDIT_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.REGISTER_FORM
			}
		}
	})
	.state(STATE.ARTISTS, {
		url: URL.ARTISTS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.GENRES, {
		url: URL.GENRES,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.TRACKS, {
		url: URL.TRACKS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.GENRE_ARTISTS, {
		url: URL.GENRE_ARTISTS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.TRACK_ARTISTS, {
		url: URL.TRACK_ARTISTS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.USER_ARTISTS, {
		url: URL.USER_ARTISTS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.ARTIST_GENRES, {
		url: URL.ARTIST_GENRES,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.TRACK_GENRES, {
		url: URL.TRACK_GENRES,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.USER_GENRES, {
		url: URL.USER_GENRES,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.ARTIST_TRACKS, {
		url: URL.ARTIST_TRACKS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.GENRE_TRACKS, {
		url: URL.GENRE_TRACKS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.USER_TRACKS, {
		url: URL.USER_TRACKS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_CONTENT
			},
			footer: footer
		}
	})
	.state(STATE.ARTISTS_ADD, {
		url: URL.ARTISTS_ADD,
		views: {
			header: editHeader,
			content: {
				controller: CONTROLLER.ARTIST_EDIT_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_EDIT_FORM
			}
		}
	})
	.state(STATE.GENRES_ADD, {
		url: URL.GENRES_ADD,
		views: {
			header: editHeader,
			content: {
				controller: CONTROLLER.GENRE_EDIT_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_EDIT_FORM
			}
		}
	})
	.state(STATE.TRACKS_ADD, {
		url: URL.TRACKS_ADD,
		views: {
			header: editHeader,
			content: {
				controller: CONTROLLER.TRACK_EDIT_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_EDIT_FORM
			}
		}
	});
	$urlRouterProvider.otherwise(URL.HOME_PAGE);
}]);