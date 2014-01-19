var LinvoDB = require("linvodb");

var Contact = new LinvoDB.Model("contact", {
    firstName: "string",
    lastName: "string",
    phone: "string",
    birth: "date",
    tags: ["string"]
});
//Contact.virtual("age")
//Contact.virtual("fullName")

LinvoDB.createService(angular.module("contacts"), Contact);
