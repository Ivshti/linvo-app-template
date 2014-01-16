var LinvoDB = require("linvodb");

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
