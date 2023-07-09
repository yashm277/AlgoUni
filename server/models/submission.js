const mongoose = require('mongoose');
//need to create a schema called submissionSchema which will have a foreign key to both the user and problem schema, a code field which is a string and a result field which is a string enum of either "approved","rejected","TLE","MLE","WA","RE" //also needs to have a date field which is a date type and is required and has a default value of Date.now
const submissionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true},
    code: {type: String, required: true},
    result: {type: String, required: true, enum: ["approved","rejected","TLE","MLE","WA","RE"]},
    date: {type: Date, required: true, default: Date.now}
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = { Submission };
