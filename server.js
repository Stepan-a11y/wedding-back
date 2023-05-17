import express from 'express'
import { connect, connection } from 'mongoose';
import { json } from 'body-parser';
import cors from 'cors';
import path from 'path';
import { wedding } from './connectDB';


const serv = express();
const port = process.env.PORT || 3001;

serv.use(cors());
serv.use(json());

import newGuest from './routes/newGuest';

serv.use('/api', newGuest) 

serv.listen(port, ()=>{
    console.log("connected");
});

connect(wedding, { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.set('useFindAndModify', false);

connection.on('connected', () => {
    console.log("success");
});

connection.on('error', (err) => {
    console.log("not success" + err);
});