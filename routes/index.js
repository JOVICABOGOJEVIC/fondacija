const express = require('express');
const router = express.Router();


//Portfolio
router.use('/', require("./home"));
router.use("/login", require("../controllers/loginController"));
router.use("/logout", require("./logout"));

router.use("/admin",require("./admin"));
router.use("/koordinator",require("./koordinator"));
router.use("/cv",require("./cv"));
router.use("/table",require("./table"));



module.exports = router;
