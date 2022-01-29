const express = require('express');
const router = express.Router();

router.get('/portfolio', (req,res) =>{
    res.render("cv/portfolio")
});
router.get('/about', (req,res) =>{
    res.render("cv/about")
});
router.get('/projects', (req,res) =>{
    res.render("cv/projects")
});
router.get('/skills', (req,res) =>{
    res.render("cv/skills")
});
module.exports = router;
