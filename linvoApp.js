var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
LinvoDB.init(gui.App.dataPath);

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.contacts = contact.live({ });
    
    $scope.selected = { };
    $scope.selected.contact = new contact(); // Selected contact    
    
    $scope.new = function() { $scope.selected.contact = new contact() };
}]);
