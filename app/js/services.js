'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).value('versions', '0.11');

angular.module('myApp.services').factory('sharedPos', function() {
  var pos = [
    {id: 1, text: 'the first question'},
    {id: 2, text: 'the second question'},
    {id: 3, text: 'the third question'}
  ];

  return {
    add: function(value) {
      var item = {id: 0, text: ''};
      item.id = pos.length + 1;
      item.text = value;
      pos.push(item);
    },
    getPos: function() {
      return pos;
    }
  };
});