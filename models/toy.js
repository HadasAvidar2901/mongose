const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
    name: String,
    price: Number,
    
})

const toyModel = mongoose.model("mytoy", toySchema);
module.exports = toyModel;