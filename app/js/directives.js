'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['versions', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
