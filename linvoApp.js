var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb")(gui.App.dataPath);

var app = angular.module("contacts", []);

/* Ideally this should be a separate file for the model
 */
var Contact = new LinvoDB.Model("contact", {
    name: String,
    lastName: String,
    phone: String,
    birth: Date,
    //tags: [String]
});
//User.virtual("age")
//User.virtual("fullName")

/*
setTimeout(function() {
    var ivo = new User({
        name: "Ivo",
        lastName: "Georgiev"
    });
    ivo.save(function(err, doc) { console.log(doc) });
}, 5*1000);

User.on("updated", function() { console.log("collection updated") });
User.find({ name: "Ivo" }, function(err, res){console.log(res)});
*/
LinvoDB.createService(app, Contact);
/* 
 */

app.controller("linvoAppCtrl", ["$scope", "contact", function($scope, contact)
{
    $scope.message = "main controller speaking";
    
}]);
