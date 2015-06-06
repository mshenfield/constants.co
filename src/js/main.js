angular
  .module('constantsCo', [])

  .controller('Main', function($http) {
    var main = this;

    $http
      .get('data.json')
      .success(function(res) {
        main.constants = res;
        console.log(res);
      })



    main.searchFilter = function(element) {
      return element.Quantity.match()
    }

  })
