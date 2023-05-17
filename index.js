const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./connectDB');
const Guests = require('./schemas/guestsSchema');


const serv = express();

const router = express.Router();

const port = process.env.PORT || 3001;


router.get('/', (req, res) => {
    res.json({
        "hello": "hi!"
    })
})


router.post( '/newguest', (req, res) => {
        let newGuest = new Guests({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            status: req.body.status,
        });
        
        try {
            newGuest.save();
            res.json(newGuest);    
        } catch (err) {
            res.json({success: false, msg: "not add"});
        }
});

serv.use(cors());
serv.use(bodyParser.json());

serv.use('/api', router) 

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
