const myConnection = require('../connection');

var user = function(user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

user.create = function(new_user , result) {
    myConnection.query('INSERT INTO USERS SET ?' , new_user , (err , res) => {
        if(err){ 
            console.log(err);
            result(err,null);
        }    
        else 
        {
            console.log('Inserted Succesfully');
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
module.exports = user;
