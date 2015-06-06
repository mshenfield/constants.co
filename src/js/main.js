angular
  .module('constantsCo', [])

  .controller('Main', function($http) {
    var main = this;
    var main.constantsObject;

    $http
      .get('data.json')
      .success(function(res) {
        main.constantsObject = res.constants;
        console.log(res);
      })


    main.searchFilter = function(element) {
      return element.Quantity.match()
    }

  })
