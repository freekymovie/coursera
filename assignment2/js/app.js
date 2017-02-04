(function() {
'use strict'
  angular.module('shoppingListApp', [])
      .controller('ShoppingListController', ShoppingListController)
      .service('ShoppingListService', ShoppingListService);

  ShoppingListController.$inject = ['$scope', 'ShoppingListService'];
  function ShoppingListController($scope, ShoppingListService) {
    var shoppingListCtrl = this;
    shoppingListCtrl.shoppingItems = ShoppingListService.getShoppingItems();
    //console.log('Controller items: ', shoppingListCtrl.shoppingItems);
    shoppingListCtrl.boughtItems = [];

    shoppingListCtrl.buyItem = function(itemIndex) {
      shoppingListCtrl.boughtItems.push(shoppingListCtrl.shoppingItems[itemIndex]);
      shoppingListCtrl.shoppingItems.splice(itemIndex, 1);
      //console.log(shoppingListCtrl.boughtItems.length);
      //console.log(shoppingListCtrl.shoppingItems.length);
    };

    shoppingListCtrl.removeItem = function(itemIndex) {
      shoppingListCtrl.shoppingItems.push(shoppingListCtrl.boughtItems[itemIndex]);
      shoppingListCtrl.boughtItems.splice(itemIndex, 1);
    };

  };

  function ShoppingListService() {
    var service = this;
    var items = [
      {itemName: 'Strawberry', quantity: 2},
      {itemName: 'Banana', quantity: 4},
      {itemName: 'Apple', quantity: 3},
      {itemName: 'Orange', quantity: 2},
      {itemName: 'Pineapple', quantity: 1}
    ];
    service.getShoppingItems = function () {
      //console.log('Service items:', items);
      return items;
    }
  };

})();
