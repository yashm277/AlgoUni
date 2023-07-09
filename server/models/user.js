const mongoose = require('mongoose');
//need to create a schema called userSchema that will have a username and password, first and last name - all of which are required
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
