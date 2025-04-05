const express = require("express");
const router = express.Router();
const { getAllLands, addLand, getLandDetails, updateLand, deleteLand, getTopLands } = require("../controllers/LandController");

router.route("/landslist").get(getAllLands);
router.route("/addLand").post(addLand);
router.route("/landDetails/:id").get(getLandDetails);
router.route("/updateLand/:id").put(updateLand);
router.route("/deleteLand/:id").delete(deleteLand);
router.route("/getTopLands").get(getTopLands);
module.exports = router;