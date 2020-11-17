const express = require('express');
const Router = express.Router();
const user_controller = require('../Controller/control');
const bid_controller = require('../Controller/controlBid');

Router.post('/' , user_controller.create);
Router.post('/gettoken' , user_controller.gettoken);
Router.get('/getuser' , user_controller.getuser);
Router.post('/newbid' , bid_controller.insertBid);
Router.get('/getallbid',bid_controller.getAllBid);
Router.post('/getmycrop',bid_controller.getMyCrop);
Router.post('/getprice' , bid_controller.getPrice);
Router.post('/placebid' , bid_controller.placeBid);
Router.post('/closebid' , bid_controller.closeBid);
Router.post('/yourstatus' , bid_controller.status);
Router.post('/gDetails' , user_controller.gDetails);
Router.get('/verify',user_controller.verify);

module.exports = Router;