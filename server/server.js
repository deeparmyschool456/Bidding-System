const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const myConnection = require('./connection')
const Post = require('./Routes/route');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
app.use('/post' , Post);
app.listen(8000);