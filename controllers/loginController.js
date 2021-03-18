const mongojs = require('mongojs');
const db = mongojs("baza",["users"]);

const loginController = (req,res) =>{
let nameIzForme = req.body.name;
let passIzForme = req.body.password;

db.users.find({first_name:nameIzForme, password:passIzForme}, (err,docs) =>{
    if(err){
        console.log('Greska');
        res.redirect("/");
    }else{
        if(docs.length ===1){
let user = docs[0];
req.session.user = user;
if(user.role == "admin"){
    res.redirect("/admin");
}else if (user.role == "координатор"){
    res.redirect("/koordinator");
}

else{
    res.redirect('/');
}
        }else{
            res.redirect('/');
        }
    }
})
}

module.exports = loginController;