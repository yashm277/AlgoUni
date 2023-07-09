const mongoose = require('mongoose');
//need to create a schema calle problemSchema that will have a title, description, difficulty - all of which are required
const problemSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: {type: String, required: true},
    //difficulty should be enum string with values of easy, medium, hard
    difficulty: {type: String, required: true, enum: ["easy", "medium", "hard"]}
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = { Problem };

