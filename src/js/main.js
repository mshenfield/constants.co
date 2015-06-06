angular
  .module('constantsCo', [])

  // .filter('quantityArray', function() {
  //   return function(constants) {
  //     if (constants) {
  //       return constants.Quantity;
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

    main.constantOnDisplay = {};
    main.displayConstant = function(constant) {
      main.constantOnDisplay = constant;
    };

    main.searchFilter = function(element) {
      return element.Quantity.match();
    };

  });
