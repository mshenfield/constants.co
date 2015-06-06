angular
  .module('constantsCo', [])

  .controller('Main', function($http) {
    var main = this;

    main.constant = {
      quantity: '',
      value: '',
      uncertainty: '',
      unit: ''
    }

    main.getConstant = function(query) {
      $http
        .get(`http://www.nist.gov/srd/srd_data/srd121_allascii/.json`)
        .success(function(res) {

        })
    }
  })
