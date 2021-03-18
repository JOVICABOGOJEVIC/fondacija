const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const updateController =  (req,res) =>{

   let id = req.body.id;
   db.users.update({_id:mongojs.ObjectID(id)},{$set:{
       sectionMember : req.body.sectionMember,
       nameMember : req.body.nameMember,
       addressMember : req.body.addressMember,
       mailMember : req.body.mailMember,
       fixMember : req.body.fixMember,
       mobilMember : req.body.mobilMember,
       fondMember : req.body.fondMember,
       personMember : req.body.personMember,
       numberMember : req.body.numberMember,
       jobMember : req.body.jobMember,
       noteMember : req.body.noteMember,
       writeMember : req.body.writeMember,
       xxxMember : req.body.xxxMember
   }},(err,users)=>{
      res.redirect('/admin')
   })




}
module.exports = updateController;
