const express = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");
const SessionController = require("../controllers/SessionController");
const SpotController = require("../controllers/SpotController");
const BoookingController = require("../controllers/BookingController");
const DashboardController = require("../controllers/DashboardController");

const router = express.Router();
const upload = multer(uploadConfig);
// index = Get store = Post upate = PUT delete = Delete

// index
router.get("/users", SessionController.index);
router.get("/spots", SpotController.index);
//store
router.post("/users", SessionController.store);
router.post("/sessions", SessionController.store);
router.post("/spots", upload.single("thumbnail"), SpotController.store);

router.post("/spots/:spot_id/bookings", BoookingController.store);

router.get("/dashboard", DashboardController.show);

module.exports = router;
