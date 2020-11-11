const myConnection = require('../connection');

var bids = function(bid) {
    this.email = bid.email;
    this.crop = bid.crop;
    this.baseprice = bid.baseprice;
    this.comments = bid.comments;
    this.city = bid.city;
}
bids.insertBid = function(new_bid , result) {
    console.log(new_bid);
    myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , new_bid.email , (err , res) => {
        if(err) result(err , null);
        else {
            //console.log(res);
            const data = {
                crop : new_bid.crop,
                baseprice : new_bid.baseprice , 
                user_id : res[0].ID ,
                comments : new_bid.comments,
                city : new_bid.city,
                status : 0,
                current_bid : new_bid.baseprice
            };
            // console.log(data);
            myConnection.query('INSERT INTO BIDS SET ?' , data , (err , res) => {
                
                if(err) result(err , null);
                else {
                    console.log('Inserted Bid'); 
                    result(null , res);
                }
            })
            //result(null , res);
        }
    })
}

bids.getall = function(result){
    myConnection.query("SELECT * FROM BIDS ", (err , res) => {
        if(err) result(err , null);
        else result(null , res);    
    })
}

bids.getmycrop = function(email , result) {

   myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , email , (err , res) => {
       if(err) result(err , null);
       else {
           //console.log(res);
           
           // console.log(data);
           myConnection.query('SELECT * from bids where USER_ID = ?' , res[0].ID , (err , res) => {
               
               if(err) result(err , null);
               else {
                   //console.log('Inserted Bid'); 
                   result(null , res);
               }
           })
           //result(null , res);
       }
   })
}
bids.getmyPrice =  function(id , result) {
    // console.log(id);
    myConnection.query('SELECT * FROM BIDS WHERE ID = ?' , id , (err , res) => {
        if(err) result(err , null);
        else result(null , res);
    })
}
bids.placeMyBid = function(pBid , result) {
    //console.log(pBid);
    myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , pBid.email , (err , res) => {
        if(err) result(err , null);
        else {
            myConnection.query('UPDATE BIDS SET CURRENT_BID = ? , BUYER_ID = ? WHERE ID = ?' , [pBid.bidplaced , res[0].ID , pBid.id] , (err , res) => {
                if(err) result(err , null);
                else result(null , res)
            })
        }
    })
}


module.exports = bids;