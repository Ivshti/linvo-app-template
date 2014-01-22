var LinvoDB = require("linvodb");

var Contact = new LinvoDB.Model("contact", {
    firstName: "string",
    lastName: "string",
    email: { type: "string", index: true, unique: true, sparse: true },
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

// Or, instead of what we have on the email field, we can do that
//Contact.ensureIndex({ fieldName: "email", sparse: true, unique: true });

LinvoDB.createService(angular.module("contacts"), Contact);
