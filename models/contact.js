var gui = require("nw.gui"); // in order to get the dataPath 
var LinvoDB = require("linvodb")(gui.App.dataPath);

var Contact = new LinvoDB.Model("contact", {
    name: String,
    lastName: String,
    phone: String,
    birth: Date,
    //tags: [String]
});
//Contact.virtual("age")
//Contact.virtual("fullName")

LinvoDB.createService(angular.module("contacts"), Contact);
