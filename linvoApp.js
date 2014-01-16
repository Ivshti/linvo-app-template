var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb");
LinvoDB.init(gui.App.dataPath);

var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    contact.find({}, function(err, contacts)
    {
        console.log(contacts);
    });
    contact.on("updated", function() { console.log("collection updated") });
    
    $scope.selected = new contact(); // Selected contact
    // ng-click=selected.save();
}]);
