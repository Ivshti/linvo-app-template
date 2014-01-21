var LinvoDB = require("linvodb");

var Contact = new LinvoDB.Model("contact", {
    firstName: "string",
    lastName: "string",
    email: "string",
    phone: "string", // NOTE: we need several phones ; and address
    position: "string", 
    birth: "date",
    tags: ["string"]
});

Contact.virtual("age", function() { return Math.floor((Date.now() - this.birth.getTime())/(365*24*60*60*1000)) });
Contact.virtual("fullName", function() { return this.firstName+" "+this.lastName });

Contact.method("findSameName", function(cb) 
{
    Contact.find({ firstName: this.firstName, _id: { $ne: this._id } }, cb)
});

LinvoDB.createService(angular.module("contacts"), Contact);
