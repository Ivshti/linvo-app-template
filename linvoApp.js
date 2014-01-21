var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
var LinvoAPI = require("linvo-api4-client");

LinvoDB.init(gui.App.dataPath);
var linvoAPI = new LinvoAPI();

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    contact.setupSync(linvoAPI);
    $scope.contacts = contact.live({ });
    
    $scope.selected = { };
    $scope.selected.contact = new contact(); // Selected contact    
    
    $scope.new = function() { $scope.selected.contact = new contact() };
}]);
