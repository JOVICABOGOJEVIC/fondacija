const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const updateFController =  (req,res) =>{

   let id = req.body.id;
   db.users.update({_id:mongojs.ObjectID(id)},{$set:{
 sectionFriend : req.body.sectionFriend,
 nameFriend : req.body.nameFriend,
 addressFriend : req.body.addressFriend,
 mailFriend : req.body.mailFriend,
 fixFriend : req.body.fixFriend,
 mobilFriend : req.body.mobilFriend,
 fondFriend : req.body.fondFriend,
 personFriend : req.body.personFriend,
 numberFriend : req.body.numberFriend,
 jobFriend : req.body.jobFriend,
 noteFriend : req.body.noteFriend
   }},(err,users)=>{
      res.redirect('/admin')
   })




}
module.exports = updateFController;
