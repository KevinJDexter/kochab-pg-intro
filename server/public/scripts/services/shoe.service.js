app.service('ShoeService', ['$http', function($http) {
  var self = this;

  self.shoes = {shoeList: []};
  self.newShoe = {name: '', cost: ''};

  self.getShoes = function () {
    $http({
      method: 'GET',
      url: '/shoe'
    })
      .then(function(response) {
        self.shoes.shoeList = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.addShoe = function () {
    $http({
      method: 'POST',
      url: '/shoe',
      data: self.newShoe
    })
      .then(function(response) {
        console.log(response);
        self.getShoes();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.updateShoe = function (shoeToEdit) {
    $http({
      method: 'PUT',
      url: '/shoe',
      data: shoeToEdit
    })
      .then (function (response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.deleteShoe = function (shoeToDelete) {
    $http({
      method: 'DELETE',
      url: '/shoe',
      params: shoeToDelete
    })
    .then(function(response) {
      console.log(response);
      self.getShoes();
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}])