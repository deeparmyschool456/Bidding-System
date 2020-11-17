const express = require('express');
const myConnection = require('../connection');
const Router = express.Router();
const user_controller = require('../Controller/control');
const bid_controller = require('../Controller/controlBid');

Router.post('/' , user_controller.create);
Router.post('/gettoken' , user_controller.gettoken);
Router.get('/getuser' , user_controller.getuser);
Router.post('/newbid' , bid_controller.insertBid);
Router.get('/getallbid' , bid_controller.getAllBid);
Router.post('/getmycrop',bid_controller.getMyCrop);
Router.post('/getprice' , bid_controller.getPrice);
Router.post('/placebid' , bid_controller.placeBid);
Router.post('/closebid' , bid_controller.closeBid);
Router.post('/yourstatus' , bid_controller.status);
Router.post('/gDetails' , user_controller.gDetails);
// Router.get('/verify' , (req , result) => {
//     //console.log(req.protocol + ":/" + req.get('host'));
//     myConnection.query('UPDATE USERS SET ISVERIFIED = TRUE WHERE ID = ?' , req.query.id , (err , res) => {
//         if(err) result.send(err);
//         else result.send(res);
//     })
// })


module.exports = Router;