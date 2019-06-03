const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

nom : { type : String, required : true},
prenom : { type : String, required : true},
email : { type : String, required : true},
adresse : { type : String, required : true},
codePostal : { type : Number, min: 5, max: 5, required : true},
ville : { type : String, required : true},
telephone : { type : Number, min: 10, max: 10, required : true}

});

// exporting that schema as a Mongoose model, making it available for our Express app
module.exports = mongoose.model("User", userSchema);
