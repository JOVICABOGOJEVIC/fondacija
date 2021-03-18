const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const saveFriendController = (req,res) =>{

///Prijatelji
let role = "prijatelji";
let sectionFriend = req.body.sectionFriend;
let nameFriend = req.body.nameFriend;
let addressFriend = req.body.addressFriend;
let mailFriend = req.body.mailFriend;
let fixFriend = req.body.fixFriend;
let mobilFriend = req.body.mobilFriend;
let fondFriend = req.body.fondFriend;
let personFriend = req.body.personFriend;
let numberFriend = req.body.numberFriend;
let jobFriend = req.body.jobFriend;
let noteFriend = req.body.noteFriend;

  db.users.insert({role:role, sectionFriend:sectionFriend, nameFriend:nameFriend, addressFriend:addressFriend, 
    mailFriend:mailFriend, fixFriend:fixFriend, mobilFriend:mobilFriend, fondFriend:fondFriend, 
     personFriend:personFriend, numberFriend:numberFriend, jobFriend:jobFriend, noteFriend:noteFriend

    
    },(err, docs) =>{
         if(err){

         }else{
             res.redirect("/admin");
            
         }
     })
};

module.exports = saveFriendController;