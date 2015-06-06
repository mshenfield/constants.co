angular
  .module('constantsCo', [])
  .controller('Main', function($http) {
    var main = this;

    $http
      .get('data.json')
      .success(function(res) {
        main.constantsObject = res.constants;
      });

    main.constantOnDisplay = {};
    main.displayConstant = function(constant) {
      main.constantOnDisplay = constant;
    };

    main.searchFilter = function(element) {
      return element.Quantity.match();
    };

   

  });
