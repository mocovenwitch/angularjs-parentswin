'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/polist', {templateUrl: 'partials/po-list.html', controller: 'PoListCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/post', {templateUrl: 'partials/post.html', controller: 'PostQuestionsCtrl'});
    $routeProvider.otherwise({redirectTo: '/polist'});
  }]);
