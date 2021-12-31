const mongojs = require("mongojs");
const db = mongojs("baza", ["users"]);

const clanarineController = (req,res) =>{
    let user = req.session.user;
    db.users.find({},(err, users) =>{
    var members = users.filter((user) => user.role ==  "clan")
        res.render("admin/adminClanarine",{
            
            name: user.first_name,
            members:members
         
        });
    })
}


module.exports = clanarineController;