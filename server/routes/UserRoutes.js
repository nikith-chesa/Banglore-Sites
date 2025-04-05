const express = require("express");
const router = express.Router();
const { createContact, getAllContact, register, loginUser } = require('../controllers/UserController')


router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route('/contactUs').post(createContact);
router.route('/getAllContacts').get(getAllContact);


module.exports = router;