'use strict';
app.controller('UserEditController', ['$location', '$scope', '$state', 'URL', 'UserFactory', 'CookieService', 'FlashService', function($location, $scope, $state, URL, UserFactory, CookieService, FlashService) {
	var self = this;
	self.user = {id: null, login: '', role: null};

	self.login = function() {
		self.dataLoading = true;
		UserFactory.getUser(self.user.login, self.user.password, function(response) {
			if (response.success) {
				CookieService.setCredentials(response.data);
				$location.path(URL.HOME_PAGE);
			} else {
				FlashService.error(response.message);
			}
			self.dataLoading = false;
		});
	};

	self.logout = function() {
		CookieService.clearCredentials();
		$state.reload();
	};

	self.register = function() {
		self.dataLoading = true;
		UserFactory.createUser(self.user.login, self.user.password, function(response) {
			if (response.success) {
				self.login();
			} else {
				FlashService.error(response.message);
			}
			self.dataLoading = false;
		});
	};

	self.like = function(relation, id) {
		UserFactory.setUserLike($scope.user.id, relation, id, function(response) {
			if (!response.success) {
				FlashService.error(response.message);
			}
		});
	};

}]);