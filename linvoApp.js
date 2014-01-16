var app = angular.module("contacts", []);

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.message = "main controller speaking";
    
}]);
