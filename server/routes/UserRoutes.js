const express = require("express");
const router = express.Router();
const { createContact, getAllContact, register, loginUser, forgotPassword, resetPassword } = require('../controllers/UserController')


router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route('/contactUs').post(createContact);
router.route('/getAllContacts').get(getAllContact);
router.route('/auth/forgotPassword').post(forgotPassword);
router.route('/auth/resetPassword:token').post(resetPassword);

module.exports = router;