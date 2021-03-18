const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const saveController = (req,res) =>{


///Ostali
let role = "other";
let sectionOther = req.body.sectionOther;
let nameOther = req.body.nameOther;
let addressOther = req.body.addressOther;
let mailOther = req.body.mailOther;
let fixOther = req.body.fixOther;
let mobilOther = req.body.mobilOther;
let fondOther = req.body.fondOther;
let personOther = req.body.personOther;
let numberOther = req.body.numberOther;
let jobOther = req.body.jobOther;
let noteOther = req.body.noteOther;
let motherOther = req.body.motherOther;
let fatherOther = req.body.fatherOther;

  db.users.insert({role:role, sectionOther:sectionOther, nameOther:nameOther, addressOther:addressOther, 
     mailOther:mailOther, fixOther:fixOther, mobilOther:mobilOther, fondOther:fondOther, 
      personOther:personOther, numberOther:numberOther, jobOther:jobOther, noteOther:noteOther,
      motherOther :motherOther ,fatherOther :fatherOther 

    
    },(err, docs) =>{
         if(err){

         }else{
             res.redirect("/admin");
            
         }
     })
};

module.exports = saveController;