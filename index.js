const express = require('express');
const {connect} = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// connecting mongoose 
(async () => {
    try {
        await connect(process.env.URI);
        console.log('mongo connected');
    } catch (err) {
        console.log(err);
    }
})()




app.listen(process.env.PORT, () => {
    console.log('app listening on port', process.env.PORT);
})