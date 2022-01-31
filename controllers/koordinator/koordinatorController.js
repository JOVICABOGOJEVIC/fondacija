const mongojs = require("mongojs");
const db = mongojs("baza",["users"]);

const koordinatorController = (req,res) =>{
 let user = req.session.user;
 db.users.find({},(err, users) =>{
 
 var musics = users.filter((user) => user.role ==  "Музичка  секција")
 var builds = users.filter((user) => user.role ==  "Грађевинска  секција")
 var sports = users.filter((user) => user.role ==  "Спортска  секција")
 var turists = users.filter((user) => user.role ==  "Туристичка  секција")
 var ekos = users.filter((user) => user.role ==  "Еколошка  секција")
 var medics = users.filter((user) => user.role ==  "Медицинска  секција")
 var languages = users.filter((user) => user.role ==  "Језичка  секција")

 var musicsMember = users.filter((user) => user.sectionMember ==  "Музичка секција")
 var buildsMember = users.filter((user) => user.sectionMember ==  "Грађевинска секција")
 var sportsMember = users.filter((user) => user.sectionMember ==  "Спортска секција")
 var turistsMember = users.filter((user) => user.sectionMember ==  "Туристичка секција")
 var ekosMember = users.filter((user) => user.sectionMember ==  "Еколошка секција")
 var medicsMember = users.filter((user) => user.sectionMember ==  "Медицинска секција")
 var languagesMember = users.filter((user) => user.sectionMember ==  "Језичка секција")

 res.render("koordinator/index",{
    name: user.first_name,
    musics:musics,
    builds:builds,
    sports:sports,
    turists:turists,
    ekos:ekos,
    medics:medics,
    languages:languages,
    musicsMember:musicsMember,
    buildsMember:buildsMember,
    sportsMember:sportsMember,
    turistsMember:turistsMember,
    ekosMember:ekosMember,
    medicsMember:medicsMember,
    languagesMember:languagesMember
   });

 })
}

module.exports = koordinatorController;