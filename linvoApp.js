var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
var LinvoAPI = require("linvo-api4-client");

LinvoDB.init(gui.App.dataPath);
var linvoAPI = new LinvoAPI();

var app = angular.module("contacts", []);

app.factory("test",["$q",function($q)
{
    var def = $q.defer();
    setTimeout(function()
    {
        def.resolve("test test");
    }, 1000);
    return def.promise;
}]);

app.controller("linvoAppCtrl", ["$scope", "contact", "test", function($scope, contact, test)
{
    console.log(test);
    contact.setupSync(linvoAPI);
    $scope.contacts = contact.live({ });
    //$scope.contacts = contact.find({}).limit(5).sort({ _ctime: 1 }).live(); // we can do more advanced stuff

    $scope.selected = { };
    $scope.selected.contact = new contact(); // Selected contact    
    
    $scope.new = function() { $scope.selected.contact = new contact() };
}]);
