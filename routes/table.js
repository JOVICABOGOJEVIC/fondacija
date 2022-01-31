const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.render("table/work")
});

module.exports = router;
