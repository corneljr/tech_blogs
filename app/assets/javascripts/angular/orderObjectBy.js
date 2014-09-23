angular
	.module('app')
	.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item, key) {
      item.__originalKey=key;
      if (key != '$promise') {
        filtered.push(item);  
      };
    });
    filtered.sort(function (a, b) {
      if (a[0] && b[0]) {
        return (a[0][field] > b[0][field] ? 1 : -1);  
      } else {
        return -1;
      };
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});