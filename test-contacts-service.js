var LinvoIPC = require("linvoipc");
LinvoIPC.user.contacts(function(contacts)
{
	contacts.find({  },function(err,c){ console.log(c) })
})
