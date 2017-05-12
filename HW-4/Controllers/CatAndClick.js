(function (module) {
    module.controller("CatAndClickController", function ($scope) {
        $scope.numberOfClicks = 0;
        $scope.ModifyNumberOfClicks = function () {
            $scope.numberOfClicks++;
        }
        $scope.ResetClicks = function () {
            $scope.numberOfClicks = 0;
        }
    });

})(angular.module("CatAndClick"));

