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
        
        for(var a=0, b=res.constants.length; a<b; a++){
          main.terms.push(res['constants'][a]['Quantity']);
        }
      });

    main.constantOnDisplay = {};
    main.displayConstant = function(constant) {
      main.constantOnDisplay = constant;
    };

    main.searchFilter = function(element) {
      return element.Quantity.match();
    };

   

  });
