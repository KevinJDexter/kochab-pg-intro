app.controller('ShoeController', ['ShoeService', function(ShoeService) {

  var self = this;
  console.log('TOAST');
  self.shoes = ShoeService.shoes;
  self.newShoe = ShoeService.newShoe;

  self.getShoes = ShoeService.getShoes;
  self.addShoe = ShoeService.addShoe;
  self.updateShoe = function (shoeToEdit) {
    ShoeService.updateShoe(shoeToEdit);
  }
  self.deleteShoe = function (shoeToDelete) {
    ShoeService.deleteShoe(shoeToDelete);
  }

  self.getShoes();
}])