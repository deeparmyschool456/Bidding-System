const myConnection = require('../connection');

var bids = function(bid) {
    this.email = bid.email;
    this.crop = bid.crop;
    this.baseprice = bid.baseprice;
    this.comments = bid.comments;
    this.city = bid.city;
    this.bidtime = bid.bidtime,
    this.weight = bid.weight
}

bids.insertBid = function(new_bid , result) {
    //console.log(new_bid);
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
                CurrentBid : new_bid.baseprice,
                bidtime : new_bid.bidtime,
                weight : new_bid.weight
            };
            //console.log(data);
            myConnection.query('INSERT INTO BIDS SET ?' , data , (err , res) => {
                
                if(err){ 
                    console.log(err);
                    result(err , null);
                
                }else {
                    //console.log('Inserted Bid'); 
                    result(null , res);
                }
            })
            //result(null , res);
        }
    })
}

bids.getall = function(result){
    myConnection.query("SELECT * FROM BIDS,users where bids.is_closed=0 and users.ID=bids.Buyer_id", (err , res) => {
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
           myConnection.query('SELECT * from bids,users where users.ID=bids.Buyer_id and USER_ID = ?' , res[0].ID , (err , res) => {
               
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
    myConnection.query('SELECT * FROM BIDS WHERE Crop_ID = ?' , id , (err , res) => {
        if(err) result(err , null);
        else result(null , res);
    })
}
bids.placeMyBid = function(pBid , result) {
    //console.log(pBid);

    myConnection.query("SELECT bidtime from bids where Crop_ID= ?",pBid.id,(err,res1)=>{
    var today=new Date();
    console.log("today:",today);
    console.log(res1[0].bidtime);
    
    var lastday=new Date(today);
    
    lastday.setDate(lastday.getDate() + res1[0].bidtime);
    
    console.log("Date:",lastday);

    var dd = String(lastday.getDate()).padStart(2, '0');
    var mm = String(lastday.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = lastday.getFullYear();

    var hour=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();

    var endingdate=yyyy+'-'+mm+'-'+dd+' '+hour+':'+min+':'+sec;

    console.log(endingdate);

    
    myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , pBid.email , (err , res) => {
        if(err) result(err , null);
        else {
            myConnection.query('UPDATE BIDS SET CURRENTBID = ? , BUYER_ID = ? ,EndDate = ? , status=1 WHERE Crop_ID = ?' , [pBid.bidplaced , res[0].ID ,endingdate,pBid.id] , (err , res) => {
                if(err) {
                    console.log(err);
                    result(err , null);
                }
                    else result(null , res)
            })
            const data = {
                cropid : pBid.id , 
                buyerid : res[0].ID
            }
            myConnection.query('INSERT INTO PBID SET ?' , data , (err , res) => {
                if(err) console.log(err);
                else console.log('Inserted');
            })
        }
    })
    })
}

bids.closeMyBid = function( data, result) {
    //console.log(data);
    myConnection.query('UPDATE BIDS SET is_closed=1 WHERE Crop_ID = ?' , data.id , (err , res) => {
        if(err) result(err , null);
        else result(null , res)
    })
}
    
bids.status = function(data , result) {
    console.log(data);
    myConnection.query('SELECT ID FROM USERS WHERE EMAIL = ?' , data.email , (err , res) => {
        if(err) result(err , null);
        else {
            myConnection.query('SELECT DISTINCT CROPID FROM PBID WHERE BUYERID = ?' , res[0].ID , (err , res1) => {
                if(err) console.log(err);
                else {
                    //console.log(res1);
                    var data = [];
                    var cnt = 0;
                    if(res1.length==0)
                        result(null,res1);
                    for(let index = 0 ; index < res1.length ; index++) {
                        //console.log(res1[index].ID);
                        myConnection.query('SELECT * from bids,users where users.ID=bids.Buyer_id and Crop_ID = ?' , res1[index].CROPID , (err , res2) => {
                            cnt++;
                            //console.log(res2[0]);
                            data.push(res2[0]);
                            if(cnt === res1.length) 
                                result(null , data);
                        })
                    }
                    // console.log(data);
                }
            })
        }
    })
}



module.exports = bids;