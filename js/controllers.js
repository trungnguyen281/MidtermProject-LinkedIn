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

	$http.get('database/project.json').success(function(data) {
		$scope.projects = data;
	});

	$http.get('database/skill.json').success(function(data) {
		$scope.skills = data[0];
	});

	$http.get('database/education.json').success(function(data) {
		$scope.educations = data;
	});
});

