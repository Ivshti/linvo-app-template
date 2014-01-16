var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
LinvoDB.init(gui.App.dataPath);

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.contacts = [];
    $scope.selected = { };
    
    $scope.selected.contact = new contact(); // Selected contact

    var update = function() { 
        contact.find({ }, function(err, contacts) { $scope.contacts = contacts; $scope.$apply() });
    };
    update();
    contact.on("updated", update);
    
    // ng-click=selected.save();
}]);
