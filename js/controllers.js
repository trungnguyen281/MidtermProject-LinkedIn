var LinkedInApp = angular.module('LinkedInApp', ["xeditable"]);

LinkedInApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

LinkedInApp.controller('LinkedInCtrl', function($scope, $http){
  $http.get('database/profile.json').success(function(data) {
    $scope.profile = data[0];
  });

  $http.get('database/post.json').success(function(data) {
    $scope.posts = data;
  });

  $http.get('database/summary.json').success(function(data) {
    $scope.summary = data;
  });

  $http.get('database/experience.json').success(function(data) {
    $scope.experiences = data;
  });

  $http.get('database/project.json').success(function(data) {
    $scope.projects = data;
  });

  $http.get('database/skill.json').success(function(data) {
    data.sort(function(a, b) {
    return parseFloat(b.point) - parseFloat(a.point);
    });

    $scope.topskills = data.slice(0,6);
    $scope.otherskills = data.slice(6,data.length);
  });

  $http.get('database/education.json').success(function(data) {
    $scope.educations = data;
  });

  $scope.addSummary = function() {
      $scope.inserted = {
          content: $scope.summarydetail
      };
      $scope.summarydetail = "";

      $scope.summary.push($scope.inserted);
    };

  $scope.addExperience = function() {
      $scope.inserted = {
          job: $scope.job,
          companyname: $scope.companyname,
          logocompany: $scope.logocompany,
          time: $scope.time,
          locate: $scope.locate,
          detail: $scope.detail
      };

      $scope.job = "";
      $scope.companyname = "";
      $scope.logocompany = "";
      $scope.time = "";
      $scope.locate = "";
      $scope.detail = "";

      $scope.experiences.push($scope.inserted);
    };

  $scope.addProject = function() {
      $scope.inserted = {
          projectname: $scope.projectname,
          knowledge: [$scope.knowledge1, $scope.knowledge2, $scope.knowledge3] ,
          time: $scope.time,
          detail: $scope.detail
      };

      scope.projectname = "";
      $scope.knowledge1 = "";
      $scope.knowledge2 = "";
      $scope.knowledge3 = "";
      $scope.time = "";
      $scope.detail = "";
      
      $scope.projects.push($scope.inserted);
    };

    $scope.addSkill = function() {
      $scope.inserted = {
          point: '0',
          name: $scope.skillname
      };

      $scope.skillname = "";

      $scope.otherskills.push($scope.inserted);
    };

    $scope.addEducation = function() {
      $scope.inserted = {
          schoolname: $scope.schoolname,
          logoschool: $scope.logoschool,
          major: $scope.major,
          time: $scope.time
      };

      $scope.schoolname = "";
      scope.logoschool = "";
      $scope.major = "";
      $scope.time = "";

      $scope.educations.push($scope.inserted);
    };
});

