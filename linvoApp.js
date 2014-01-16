var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.message = "main controller speaking";
    contact.find({}, function(err, contacts)
    {
        console.log(contacts);
    });
    contact.on("updated", function() { console.log("collection updated") });
    
    //$scope.current = new contact();
    // ng-click=current.save();
}]);
