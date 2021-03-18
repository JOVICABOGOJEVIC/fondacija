const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const deleteCord = (req,res)=>{
    let userId = req.params.userId;
    db.users.remove({ _id: mongojs.ObjectID(userId)}, (err, docs)=>{
        res.send("Ok");
    })
}
module.exports = deleteCord;