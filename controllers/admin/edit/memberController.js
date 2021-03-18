const mongojs = require("mongojs");
const db = mongojs("baza", ["users"]);

const memberController = (req,res) =>{
    let id = req.params.id;
db.users.findOne({_id:mongojs.ObjectID(id)},(err, users) =>{
    res.render('edit/memberView',{users:users})
})
}


module.exports = memberController;
