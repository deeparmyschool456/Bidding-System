const myConnection = require('../connection');

var bids = function(bid) {
    this.email = bid.email;
    this.crop = bid.crop;
    this.baseprice = bid.baseprice;
    this.comments = bid.comments;
}
bids.insertBid = function(new_bid , result) {
    // console.log(new_bid);
    myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , new_bid.email , (err , res) => {
        if(err) result(err , null);
        else {
            const data = {
                crop : new_bid.crop,
                baseprice : new_bid.baseprice , 
                user_id : res[0].ID ,
                comments : new_bid.comments
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
module.exports = bids;