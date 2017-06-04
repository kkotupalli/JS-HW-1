(function () {
    angular.module("catClicker").controller("catController", CatDetails);
    function CatDetails() {
        var vm = this;
        vm.catList = [{
            name: 'American Bobtail',
            src: './images/cat1.png',
            clickCount: 0
        },{
            name: 'Bengal Cats',
            src: './images/cat2.png',
            clickCount: 0
        }];
        vm.increaseCount = function (catReference) {
            catReference.clickCount++;
        };
    }
})();
