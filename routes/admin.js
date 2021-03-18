const express = require('express');
const router = express.Router();

router.use(checkAdmin);

router.get("/",require("../controllers/admin/adminController"));



router.get("/create",(req,res) =>{
    res.render("admin/adminCreateForm");
})
router.get("/create/subject",(req,res) =>{
    res.render("admin/createSubject");
})
router.get("/delete/user/:userId", require("../controllers/admin/deleteCord"))
router.get("/clanarine", require("../controllers/admin/clanarineController"))
router.get("/editMember/:id", require("../controllers/admin/edit/memberController"))


router.post("/create/saveCord", require("../controllers/admin/save/saveController"));
router.post("/create/saveMember", require("../controllers/admin/save/saveMemberController"));
router.post("/create/saveFriend", require("../controllers/admin/save/saveFriendController"));
router.post("/create/saveShrine", require("../controllers/admin/save/saveShrineController"));
router.post("/create/saveOther", require("../controllers/admin/save/saveOtherController"));

router.post("/update/:id", require("../controllers/admin/updateController"));
router.post("/updateAgain/:id", require("../controllers/admin/updateAgainController"));
router.post("/edit/saveMember", require("../controllers/admin/save/updateMember"));
router.post("/edit/saveFriend", require("../controllers/admin/save/updateFriend"));
router.post("/edit/saveShrine", require("../controllers/admin/save/updateShrine"));
router.post("/edit/saveOther", require("../controllers/admin/save/updateOther"));


function checkAdmin(req,res,next){
    let user = req.session.user
    if(user){
if(user.role == "admin" ){
    next();
}else{
    res.redirect("/");
}
    }else{
        res.redirect("/");
    }
}

module.exports = router;
