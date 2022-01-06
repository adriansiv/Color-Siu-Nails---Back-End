const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phoneNumber: {
            type: Number
        },
        message: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


module.exports = mongoose.model('Contact', ContactSchema);