var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb")(gui.App.dataPath);

function linvoAppCtrl($scope)
{
    $scope.message = "main controller speaking";
}
