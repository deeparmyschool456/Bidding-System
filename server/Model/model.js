const myConnection = require('../connection');
const nodemailer = require('nodemailer');

var user = function(user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

var smtpTransport = nodemailer.createTransport({
    service : "Gmail" ,
    auth : {
        user : "kunnns815@gmail.com" ,
        pass : "lhrd bfjl wczl lfao"
    }
});

user.create = function(new_user , result) {
    myConnection.query('INSERT INTO USERS SET ?' , new_user , (err , res) => {
        if(err){ 
            console.log(err);
            result(err,null);
        }    
        else 
        {
            console.log('Inserted Succesfully');
            
            var url = "http://localhost:8000/post/verify?id=" + res.insertId;
             mailOptions = {
                 to : new_user.email ,
                 from : "Kunal From Agromart <kunnns815@gmail.com>",
                subject : "Please Verify Your Email Address" ,
                html : "Hello "+new_user.username+",<br>Thank You for registering with us.Please Click on the link to verify your email.<br><a href = " + url + " >Click here to verify</a>"
            }
            //console.log(mailOptions);
            smtpTransport.sendMail(mailOptions , (err , res) => {
                if(err) console.log(err);
                else console.log("Message sent :" + res);
            })
            console.log(res);
            result(null,res);
        }    
    })
}
user.login = function(email , password , result) {
    myConnection.query("SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ?" , [email , password] , (err , res) => {
        if(err) result(err , null);
        else result(null , res);  
    })
}
user.gdetails = function(email , result) {
    //console.log(email);
    myConnection.query("SELECT * FROM USERS WHERE EMAIL = ?" , email , (err , res) => {
        if(err) result(err ,  null);
        else result(null , res);
    })
}

user.verify = function(req,result) {
    //console.log(email);
    myConnection.query('UPDATE USERS SET ISVERIFIED = TRUE WHERE ID = ?' , req.query.id , (err , res) => {
        if(err) result(err ,  null);
        else result(null ,'Thank You.Your Account is verified now');
    })
}

user.updateEmail = function(req,result){
    console.log(req.body);

    myConnection.query('Update users set email = ?,isverified=0 where email = ?',[req.body.update,req.body.email],(err,res)=>{
        if(err)
        {
            console.log(err);
            result(err,null);
        }
        else
        {
            myConnection.query("SELECT * from users where email=?",req.body.update,(err,res2)=>{

                var url = "http://localhost:8000/post/verify?id=" + res2[0].ID;
                mailOptions = {
                    to : res2[0].email ,
                    from : "Kunal From Agromart <kunnns815@gmail.com>",
                    subject : "Please Verify Your Email Address" ,
                    html : "Hello "+res2[0].username+",<br>Thank You for registering with us.Please Click on the link to verify your email.<br><a href = " + url + " >Click here to verify</a>"
                }
                //console.log(mailOptions);
                smtpTransport.sendMail(mailOptions , (err , res) => {
                    if(err) console.log(err);
                    else {
                        console.log("Message sent :" + res);
                        
                    }    
                })
                result(null,'success');
                
            })   
        } 
    })
}

user.updatePassword = function(req,result){
    console.log(req.body);

    myConnection.query('Update users set password = ? where email = ?',[req.body.password,req.body.email],(err,res)=>{
        if(err)
            result(err,null);
        else
        {
            result(null,'success');
        } 
    })
}
module.exports = user;
