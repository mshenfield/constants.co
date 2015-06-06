angular
  .module('constantsCo', [])

  .controller('Main', function($http) {
    var main = this;

    $http
      .get(`http://www.nist.gov/srd/srd_data/srd121_allascii.json`)
      .success(function(res) {
        main.constants = res;
      })



    main.searchFilter = function(element) {
      return element.Quantity.match()
    }
  })
