const mysql = require('mysql');

var myConnection = mysql.createConnection({
    user : 'root' , 
    host : 'localhost' ,
    password : '@dityA207' ,
    database : 'farmer',
    insecureAuth : true
});

myConnection.connect( (err) => {
    if(!err) console.log('Connected!');
    else console.log('Failed to Connect..!');
});

module.exports = myConnection;
