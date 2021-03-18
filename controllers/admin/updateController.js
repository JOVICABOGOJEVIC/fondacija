const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const updateController = (req,res) =>{
    let id = req.params.id;
//    var stateMember = stateMember ? false : true;
    db.users.update({_id:mongojs.ObjectID(id)},{
      
        $set : {
            
          stateMember:  false
        }
    },(err,docs) =>{
        res.redirect("/admin/clanarine")
    })
}

module.exports = updateController;
