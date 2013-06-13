'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', []);

app.controller('PoListCtrl', ['$scope', 'sharedPos', function($scope, sharedPos) {
  $scope.pos = sharedPos.getPos();
}]);

app.controller('MyCtrl2', [function() {

}]);

app.controller('PostQuestionsCtrl', ['$scope', 'sharedPos', function($scope, sharedPos) {
  $scope.disabledPost = true;

  $scope.checkText = function() {
    $scope.disabledPost = true;
    if($scope.content.length > 0) {
      $scope.disabledPost = false;
    }
  };
  $scope.post = function(content) {
    sharedPos.add(content);

    $scope.po = content;
    $scope.content = '';
    $scope.disabledPost = true;
  };
}]);