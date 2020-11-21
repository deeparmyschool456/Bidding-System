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
        console.log(err);
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

module.exports = user;
