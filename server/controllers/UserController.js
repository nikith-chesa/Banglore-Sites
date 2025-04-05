const Contact = require('../models/ContactModules');
const User = require('../models/UserModule');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    try {
        const { name, email, phone, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ phone }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: "user alredy exists" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedpassword,
            authProvider: "local"
        });

        return res.status(201).json({ message: "User registered Successfully", userId: newUser._id });

    } catch (error) {
        return res.status(500).json({ message: "Registration failed", error });
    }
}

exports.loginUser = async (req, res) => {

    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(400).json({ message: "User not found or invalid password or number", error });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "invalid credentials", error });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

        res.status(201).json({
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
}









exports.createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, message } = req.body;

        const newContact = await Contact.create({ firstName, lastName, email, phoneNumber, message });

        return res.status(201).json({ message: "contact from submitted successfully", contact: newContact });

    } catch (error) {
        return res.status(500).json({ message: "Error submitting contact form", error });
    }
}

exports.getAllContact = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).json({ message: "Error submitting contact form", error });
    }
}

