'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['versions', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
