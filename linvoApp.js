var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
var LinvoIPC = require("linvoipc");
var LinvoAPI = require("linvo-api4-client");

LinvoDB.init(gui.App.dataPath);
var linvoAPI = new LinvoAPI();

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    contact.setupSync(linvoAPI);
    LinvoIPC.defineService("contacts", function() { angular.extend(this, contact) }, { weak: false });
    $scope.contacts = contact.live({ });
    //$scope.contacts = contact.find({}).limit(5).sort({ _ctime: 1 }).live(); // we can do more advanced stuff

    $scope.selected = { };
    $scope.selected.contact = new contact(); // Selected contact    
    
    $scope.new = function() { $scope.selected.contact = new contact() };
}]);
