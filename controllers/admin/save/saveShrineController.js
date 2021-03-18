const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const saveController = (req,res) =>{

///Svetinje
let role = "shrine";
let sectionShrine = req.body.sectionShrine;
let nameShrine = req.body.nameShrine;
let addressShrine = req.body.addressShrine;
let mailShrine = req.body.mailShrine;
let fixShrine = req.body.fixShrine;
let mobilShrine = req.body.mobilShrine;
let fondShrine = req.body.fondShrine;
let personShrine = req.body.personShrine;
let numberShrine = req.body.numberShrine;
let jobShrine = req.body.jobShrine;
let noteShrine = req.body.noteShrine;

  db.users.insert({role:role, sectionShrine:sectionShrine, nameShrine:nameShrine, addressShrine:addressShrine, 
    mailShrine:mailShrine, fixShrine:fixShrine, mobilShrine:mobilShrine, fondShrine:fondShrine, 
     personShrine:personShrine, numberShrine:numberShrine, jobShrine:jobShrine, noteShrine:noteShrine

    
    },(err, docs) =>{
         if(err){

         }else{
             res.redirect("/admin");
            
         }
     })
};

module.exports = saveController;