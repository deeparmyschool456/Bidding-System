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

module.exports = Router;