(function() {
'use strict'
  angular.module('lunchCheckerApp', [])
      .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController() {
    var lunchCheckCtrl = this;
    lunchCheckCtrl.itemsName = '';
    lunchCheckCtrl.lunchMessage = '';

    lunchCheckCtrl.checkItems = function () {
      var items = lunchCheckCtrl.itemsName.split(',');
      var itemCount = 0;
      for (var lunchItem in items) {
        //console.log(items[(lunchItem)].trim());
        if(items[(lunchItem)].trim() !== '') {
          itemCount++;
        }
      }
      if(itemCount === 0) {
        lunchCheckCtrl.lunchMessage = 'Please enter data first';
      } else if(itemCount <= 3) {
        lunchCheckCtrl.lunchMessage = 'Enjoy!';
      } else {
        lunchCheckCtrl.lunchMessage = 'Too much!';
      }
      //console.log('Items: ', lunchCheckCtrl.itemsName);
    };
  };
})();
