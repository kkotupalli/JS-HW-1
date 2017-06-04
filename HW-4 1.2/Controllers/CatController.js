(function () {
    angular.module("catClicker").controller("catController", CatDetails);

    function CatDetails() {
        var vm = this;
        vm.catObj = {
            name: 'Ronny',
            clickCount: 0
        }
        vm.incrementCount = function () {
            vm.catObject.clickCount++;
        }
    }
})();
