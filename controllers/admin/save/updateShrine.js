const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const updateSController =  (req,res) =>{

   let id = req.body.id;
   db.users.update({_id:mongojs.ObjectID(id)},{$set:{
     sectionShrine : req.body.sectionShrine,
     nameShrine : req.body.nameShrine,
     addressShrine : req.body.addressShrine,
     mailShrine : req.body.mailShrine,
     fixShrine : req.body.fixShrine,
     mobilShrine : req.body.mobilShrine,
     fondShrine : req.body.fondShrine,
     personShrine : req.body.personShrine,
     numberShrine : req.body.numberShrine,
     jobShrine : req.body.jobShrine,
     noteShrine : req.body.noteShrine
   }},(err,users)=>{
      res.redirect('/admin')
   })




}
module.exports = updateSController;
