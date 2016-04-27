var LinkedInApp = angular.module('LinkedInApp', []);

LinkedInApp.controller('LinkedInCtrl', function($scope, $http){
	$http.get('database/profile.json').success(function(data) {
		$scope.profile = data[0];
	});

	$http.get('database/post.json').success(function(data) {
		$scope.posts = data;
	});

	$http.get('database/summary.json').success(function(data) {
		$scope.summary = data[0];
	});

	$http.get('database/experience.json').success(function(data) {
		$scope.experiences = data;
	});
});

