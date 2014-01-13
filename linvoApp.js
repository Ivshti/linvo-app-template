var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb")(gui.App.dataPath);

/* Ideally this should be a separate file for the model
 */
var User = new LinvoDB.Model("contact", {
    name: String,
    lastName: String,
    phone: String,
    birth: Date,
    tags: [String]
});
//User.virtual("age")
//User.virtual("fullName")

var ivo = new User({
    name: "Ivo",
    lastName: "Georgiev"
});
ivo.save();
/* 
 */

function linvoAppCtrl($scope)
{
    $scope.message = "main controller speaking";
}
