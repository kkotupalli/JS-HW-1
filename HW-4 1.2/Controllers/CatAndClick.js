(function (module) {
    module.controller("CatAndClickController", CatAndClickController);
})(angular.module("CatAndClick"));

function CatAndClickController() {
    var _context = this;
    _context._catsList = [{ name: 'Jerry', ClickCount: 0 }, { name: 'Mickey', ClickCount: 0 }];
    _context.ClickTheCat = function (name) {
        for (var catcount = 0; catcount < _context._catsList.length; catcount++) {
            if (_context._catsList[catcount].name == name) {
                _context._catsList[catcount].ClickCount++;
            }
        }
    }
}
