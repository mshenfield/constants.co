angular
  .module('constantsCo', [])

  .controller('Main', function($http) {
    var main = this;

    main.constant = {
      quantity: 'atom',
      value: '1.1',
      uncertainty: 'definitely',
      unit: 'kg'
    }

    main.getConstant = function(query) {
      $http
        .get(`http://www.nist.gov/srd/srd_data/srd121_allascii.json`)
        .success(function(res) {
          console.log(res)
        })
    }
  })
