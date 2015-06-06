angular
  .module('constantsCo', [])

  // .filter('quantityArray', function() {
  //   return function(constants) {
  //     if (constants) {
  //       return constants
  //         .map(function(constant) {
  //           return constant.Quantity;
  //         });
  //     }
  //   };
  // })

  .controller('Main', function($http) {
    var main = this;

    $http
      .get('data.json')
      .success(function(res) {
        main.constantsObject = res.constants;
        console.log(res);
      });
  });
