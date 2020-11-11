require('dotenv').config();
const bid = require('../Model/bids');
const passport = require('passport');

exports.insertBid = function(req , res) {
    //console.log(req.body);
    const new_bid = new bid(req.body);
    bid.insertBid(new_bid , (err , bid) => {
        if(err) res.send(err);
        else res.json(bid);
    })
}

exports.getAllBid = function(req , res) {
    bid.getall((err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);    
    })
}


exports.getMyCrop = function(req , res) {
    //console.log(req.body);
    bid.getmycrop(req.body.email,(err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);    
    })
}
