const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        lowercase: true
    },
    lastname: {
        type: String,
        lowercase: true
    },
    phoneno: {
        type: String,
        lowercase: true
    },
    address: {
        type: String,
        lowercase: true
    }
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;