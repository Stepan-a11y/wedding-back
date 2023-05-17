const express = require('express');
const router = express.Router();
const connectDB = require('../connectDB');
const Guests = require('../schemas/guestsSchema');


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

module.exports = router;