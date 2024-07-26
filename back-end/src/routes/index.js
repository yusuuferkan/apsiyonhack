const express = require("express");
const router = express.Router();
const tryCatchHandler = require("../middleware/tryCatch");
const httpMethodError = require("../middleware/httpMethodError");
const mainController = require("../controllers/main.controller");

router
  .route("/")
  .get(tryCatchHandler(mainController.entryHandler))
  .all(httpMethodError);

router
  .route("/info")
  .get(tryCatchHandler(mainController.infoHandler))
  .all(httpMethodError);

module.exports = router;
