var LinkedInApp = angular.module('LinkedInApp', []);

LinkedInApp.controller('LinkedInCtrl', function($scope, $http){
	$http.get('database/profile.json').success(function(data) {
		$scope.profile = data[0];
	});
});

