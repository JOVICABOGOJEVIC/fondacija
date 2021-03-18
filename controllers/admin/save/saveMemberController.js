const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const saveController = (req,res) =>{

///Clanovi
let role = "clan";
let sectionMember = req.body.sectionMember;
let nameMember = req.body.nameMember;
let addressMember = req.body.addressMember;
let mailMember = req.body.mailMember;
let fixMember = req.body.fixMember;
let mobilMember = req.body.mobilMember;
let fondMember = req.body.fondMember;
let personMember = req.body.personMember;
let numberMember = req.body.numberMember;
let jobMember = req.body.jobMember;
let noteMember = req.body.noteMember;
let writeMember = req.body.writeMember;
let xxxMember = req.body.xxxMember;
let stateMember = true;

  db.users.insert({role:role, sectionMember:sectionMember, nameMember:nameMember, addressMember:addressMember, 
    mailMember:mailMember, fixMember:fixMember, mobilMember:mobilMember, fondMember:fondMember, 
     personMember:personMember, numberMember:numberMember, jobMember:jobMember, noteMember:noteMember,
     writeMember:writeMember, xxxMember:xxxMember, stateMember:stateMember 
    },(err, docs) =>{
         if(err){

         }else{
             res.redirect("/admin");
            
         }
     })
};

module.exports = saveController;