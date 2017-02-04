(function() {
'use strict'
  angular.module('shoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    boughtCtrl.removeItem = function(itemIndex) {
      return ShoppingListCheckOffService.removeItem(itemIndex);
    };
  };

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    toBuyCtrl.buyItem = function(itemIndex) {
      return ShoppingListCheckOffService.buyItem(itemIndex);
    };
  };

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyItems = [
      {itemName: 'Strawberry', quantity: 2},
      {itemName: 'Banana', quantity: 4},
      {itemName: 'Apple', quantity: 3},
      {itemName: 'Orange', quantity: 2},
      {itemName: 'Pineapple', quantity: 1}
    ];
    service.boughtItems = [];

    service.getToBuyItems = function() {
      return service.toBuyItems;
    };

    service.getBoughtItems = function() {
      return service.boughtItems;
    };

    service.buyItem = function(itemIndex) {
      service.boughtItems.push(service.toBuyItems[itemIndex]);
      service.toBuyItems.splice(itemIndex, 1);
    };

    service.removeItem = function(itemIndex) {
      service.toBuyItems.push(service.boughtItems[itemIndex]);
      service.boughtItems.splice(itemIndex, 1);
    };

  };

})();
