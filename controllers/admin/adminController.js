const mongojs = require("mongojs");
const db = mongojs("baza", ["users"]);

const adminController = (req,res) =>{
    let user = req.session.user;
    db.users.find({},(err, users) =>{
    var cords = users.filter((user) => user.cord ==  "координатор")
    var friends = users.filter((user) => user.role ==  "prijatelji")
    var members = users.filter((user) => user.role ==  "clan")
    var others = users.filter((user) => user.role ==  "other")
    var shrines = users.filter((user) => user.role ==  "shrine")


        res.render("admin/adminDashboard",{
            
            name: user.first_name,
            cords:cords,
            friends:friends,
            members:members,
            shrines:shrines,
            others:others    
        });
    })
}


module.exports = adminController;