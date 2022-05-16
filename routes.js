const express = require("express");
const controller = require("./controller");
const router = express.Router();

// router.get("/", ytController.getIndex);
router.get(
  "/api/:temperature/:heartRate/:sleepingHours",
  controller.predictionResult
);

module.exports = router;
