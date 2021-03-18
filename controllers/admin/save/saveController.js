const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const saveController = (req,res) =>{
///Koordinatori
let cord = "координатор";
let role = req.body.role;
let date = req.body.date;
let name = req.body.name;
let address = req.body.address;
let mail = req.body.mail;
let fix = req.body.fix;
let mobil = req.body.mobil;
let fond = req.body.fond;
let person = req.body.person;
let number = req.body.number;
let job = req.body.job;
let note = req.body.note;


  db.users.insert({cord:cord, role:role, date:date, name:name, address:address, mail:mail, fix:fix, 
    mobil:mobil, fond:fond, person:person, number:number, job:job, note:note
    
    },(err, docs) =>{
         if(err){

         }else{
             res.redirect("/admin");
            
         }
     })
};

module.exports = saveController;