const mongoose = require("mongoose");

const solutionSchema = mongoose.Schema({

    nom : { type : String, required : true},
    etatFinance : { type : String, required : true },   
    propositionSolution : {type : String }
});

// exporting that schema as a Mongoose model, making it available for our Express app
module.exports = mongoose.model("Solution", solutionSchema);
