var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
LinvoDB.init(gui.App.dataPath);

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.contacts = [];

    var update = function() { 
        contact.find({ }, function(err, contacts) { $scope.contacts = contacts });
    };
    update();
    contact.on("updated", update);
    
    $scope.selected = new contact(); // Selected contact
    // ng-click=selected.save();
}]);
