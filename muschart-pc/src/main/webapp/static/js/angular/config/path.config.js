'use strict';
app.config(function($stateProvider, $urlRouterProvider, CONTROLLER, PATH, STATE, TITLE, URL) {

	var mainHeader = {
		controller: CONTROLLER.USER_CONTROLLER,
		controllerAs: CONTROLLER.CTRL,
		templateUrl: PATH.MAIN_HEADER
	};

	var authenticationHeader = {
		templateUrl: PATH.AUTHENTICATION_HEADER
	};

	var editHeader = {
		templateUrl: PATH.EDIT_HEADER
	};

	var footer = {
		templateUrl: PATH.FOOTER
	};

	$stateProvider
	.state(STATE.LOGIN, {
		title: TITLE.LOGIN,
		url: URL.LOGIN,
		views: {
			header: authenticationHeader,
			main_content: {
				controller: CONTROLLER.USER_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.LOGIN_FORM
			},
			footer: footer
		}
	})

	.state(STATE.REGISTER, {
		title: TITLE.REGISTER,
		url: URL.REGISTER,
		views: {
			header: authenticationHeader,
			main_content: {
				controller: CONTROLLER.USER_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.REGISTER_FORM
			},
			footer: footer
		}
	})

	.state(STATE.SETTINGS, {
		title: TITLE.SETTINGS,
		url: URL.SETTINGS,
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.SETTINGS_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.SETTINGS_TOOL
			}
		}
	})

	.state(STATE.PLAYLIST, {
		title: TITLE.PLAYLIST,
		url: URL.PLAYLIST,
		views: {
			header: mainHeader,
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.ARTIST_ADD, {
		title: TITLE.ARTIST_ADD,
		url: URL.ARTIST_ADD,
		views: {
			header: editHeader,
			main_content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTIST_EDIT_FORM
			},
			footer: footer
		}
	})

	.state(STATE.GENRE_ADD, {
		title: TITLE.GENRE_ADD,
		url: URL.GENRE_ADD,
		views: {
			header: editHeader,
			main_content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRE_EDIT_FORM
			},
			footer: footer
		}
	})

	.state(STATE.TRACK_ADD, {
		title: TITLE.TRACK_ADD,
		url: URL.TRACK_ADD,
		views: {
			header: editHeader,
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACK_EDIT_FORM
			},
			footer: footer
		}
	})

	.state(STATE.ARTISTS, {
		title: TITLE.ARTISTS,
		url: URL.ARTISTS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.GENRES, {
		title: TITLE.GENRES,
		url: URL.GENRES,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.TRACKS, {
		title: TITLE.TRACKS,
		url: URL.TRACKS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.ARTIST, {
		url: URL.ARTIST,
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			additional_content_1: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			additional_content_2: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.GENRE, {
		url: URL.GENRE,
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			additional_content_1: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			additional_content_2: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.TRACK, {
		url: URL.TRACK,
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			additional_content_1: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			additional_content_2: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.GENRE_ARTISTS, {
		url: URL.GENRE_ARTISTS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.TRACK_ARTISTS, {
		url: URL.TRACK_ARTISTS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.USER_ARTISTS, {
		title: TITLE.USER_ARTISTS,
		url: URL.USER_ARTISTS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.ARTISTS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.ARTIST_GENRES, {
		url: URL.ARTIST_GENRES,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.TRACK_GENRES, {
		url: URL.TRACK_GENRES,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.USER_GENRES, {
		title: TITLE.USER_GENRES,
		url: URL.USER_GENRES,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.GENRES_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.ARTIST_TRACKS, {
		url: URL.ARTIST_TRACKS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.ARTIST_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.GENRE_TRACKS, {
		url: URL.GENRE_TRACKS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			info: {
				controller: CONTROLLER.GENRE_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.INFO_CONTENT
			},
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			footer: footer
		}
	})

	.state(STATE.USER_TRACKS, {
		title: TITLE.USER_TRACKS,
		url: URL.USER_TRACKS,
		params: {
			page: '1'
		},
		views: {
			header: mainHeader,
			tool: {
				controller: CONTROLLER.PAGINATION_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.PAGINATION_TOOL
			},
			main_content: {
				controller: CONTROLLER.TRACK_CONTROLLER,
				controllerAs: CONTROLLER.CTRL,
				templateUrl: PATH.TRACKS_CONTENT
			},
			footer: footer
		}
	});

	$urlRouterProvider.otherwise(URL.HOME);

});