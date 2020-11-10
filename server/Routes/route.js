const express = require('express');
const Router = express.Router();
const user_controller = require('../Controller/control');

Router.post('/' , user_controller.create);
Router.post('/gettoken' , user_controller.gettoken);
Router.get('/getuser' , user_controller.getuser);
module.exports = Router;