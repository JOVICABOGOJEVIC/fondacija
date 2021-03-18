const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const updateController =  (req,res) =>{

   let id = req.body.id;
   db.users.update({_id:mongojs.ObjectID(id)},{$set:{
 sectionOther : req.body.sectionOther,
 nameOther : req.body.nameOther,
 addressOther : req.body.addressOther,
 mailOther : req.body.mailOther,
 fixOther : req.body.fixOther,
 mobilOther : req.body.mobilOther,
 fondOther : req.body.fondOther,
 personOther : req.body.personOther,
 numberOther : req.body.numberOther,
 jobOther : req.body.jobOther,
 noteOther : req.body.noteOther,
 motherOther : req.body.motherOther,
 fatherOther : req.body.fatherOther
   }},(err,users)=>{
      res.redirect('/admin')
   })




}
module.exports = updateController;
