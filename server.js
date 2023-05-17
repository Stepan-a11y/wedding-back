const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./connectDB');


const serv = express();
const port = process.env.PORT || 3001;

serv.use(cors());
serv.use(bodyParser.json());

const newGuest = require('./routes/newGuest')

serv.use('/api', newGuest) 

serv.listen(port, ()=>{
    console.log("connected on port" + port);
});

mongoose.connect(connectDB.wedding, { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log("succsses");
});

mongoose.connection.on('error', (err) => {
    console.log("not " + err);
});