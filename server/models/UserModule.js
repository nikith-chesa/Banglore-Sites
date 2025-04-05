const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local',
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    resetToken: String,
    resetTokenExpiry: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
