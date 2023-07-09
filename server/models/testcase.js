const mongoose = require('mongoose');
//need to create a testcase schema which has a foreign key reference to the problem schema and input and output fields which are strings all of which are required
const testcaseSchema = new mongoose.Schema({
    problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true},
    input: {type: String, required: true},
    output: {type: String, required: true}
});

const Testcase = mongoose.model("Testcase", testcaseSchema);

module.exports = { Testcase };

