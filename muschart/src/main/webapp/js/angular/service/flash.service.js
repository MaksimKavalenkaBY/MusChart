'use strict';
app.service('FlashService', ['$rootScope', function($rootScope) {
	return {

		initService: function() {
			$rootScope.$on('$locationChangeStart', function () {
				clearFlashMessage();
			});
			function clearFlashMessage() {
				var flash = $rootScope.flash;
				if (flash) {
					if (!flash.keepAfterLocationChange) {
						delete $rootScope.flash;
					} else {
						flash.keepAfterLocationChange = false;
					}
				}
			}
		},

		success: function(message, keepAfterLocationChange) {
			$rootScope.flash = {
				message: message,
				type: 'success', 
				keepAfterLocationChange: false
			};
		},

		error: function(message, keepAfterLocationChange) {
			$rootScope.flash = {
				message: message,
				type: 'error',
				keepAfterLocationChange: false
			};
		}

	};
}]);