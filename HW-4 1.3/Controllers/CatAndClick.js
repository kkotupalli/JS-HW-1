(function (module) {
    module.controller("CatAndClickController", CatAndClickController);
})(angular.module("CatAndClick"));
function CatAndClickController() {
    debugger;
    var _context = this;
    _context._showBlueJack = false;
    _context._showCurly = false;
    _context._showJerry = false;
    _context._showKaty = false;
    _context._showMickey = false;
    _context._selectedCatname;
    _context._selectedClickCount;
    _context._displayDetails = false;
    _context._catsList = [{ name: 'Jerry', ClickCount: 0 }, { name: 'Mickey', ClickCount: 0 }, { name: 'Katy', ClickCount: 0 }, { name: 'Blue Jack', ClickCount: 0 }, { name: 'Curly', ClickCount: 0 }];

    _context.FillTextArea = function (name) {
        debugger;
        
        if (name.toLowerCase() == 'jerry') {
            _context._showBlueJack = false;
            _context._showCurly = false;
            _context._showJerry = true;
            _context._showKaty = false;
            _context._showMickey = false;
        }
        else if (name.toLowerCase() == 'mickey') {
            _context._showBlueJack = false;
            _context._showCurly = false;
            _context._showJerry = false;
            _context._showKaty = false;
            _context._showMickey = true;
        }
        else if (name.toLowerCase() == 'katy') {
            _context._showBlueJack = false;
            _context._showCurly = false;
            _context._showJerry = false;
            _context._showKaty = true;
            _context._showMickey = false;
        }
        else if (name.toLowerCase() == 'blue jack') {
            _context._showBlueJack = true;
            _context._showCurly = false;
            _context._showJerry = false;
            _context._showKaty = false;
            _context._showMickey = false;
        }
        else if (name.toLowerCase() == 'curly') {
            _context._showBlueJack = false;
            _context._showCurly = true;
            _context._showJerry = false;
            _context._showKaty = false;
            _context._showMickey = false;
        }
        for (var catcount = 0; catcount < _context._catsList.length; catcount++) {
            if (_context._catsList[catcount].name == name) {
                //_context._catsList[catcount].ClickCount++;
                _context._selectedCatname = name;
                _context._selectedClickCount = _context._catsList[catcount].ClickCount;
            }
        }
        _context._displayDetails = true;
    }
    _context.ClickTheCat = function (name) {
        debugger;
        for (var catcount = 0; catcount < _context._catsList.length; catcount++) {
            if (_context._catsList[catcount].name == name) {
                _context._catsList[catcount].ClickCount++;
                _context._selectedClickCount = _context._catsList[catcount].ClickCount;
            }
        }
    }
}