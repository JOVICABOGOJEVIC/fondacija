const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/koordinator/koordinatorController"))

module.exports = router;
