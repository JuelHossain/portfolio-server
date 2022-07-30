const express = require('express');
const Admin = require('../model/adminModel');
const bcrypt = require('bcrypt');
const { all } = require('./projectsRouter');

const adminRouter = express.Router();

adminRouter.route('/')
.all(async (req, res,next) => {
    if (req.headers.secret === 'true') {
        next();
     } else {
            res.status(500).json({
                message: 'unauthorized access'
            })
        }
    })
    .get(async (req, res) => {
        try {
            const data = await Admin.findOne();
            const hashedPassword = data.password;
            const password = req.headers.password;
            const matched = await bcrypt.compare(password, hashedPassword);
            res.send(matched);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .post(async (req, res) => {
        try {
            await Admin.deleteMany();
            const password = await bcrypt.hash(req.body.password, 10);
            const newAdmin = new Admin({ password, secret: req.body.secret });
        const result = await newAdmin.save();
           
        res.send(result);
        } catch (err) {
             console.log(req.body);
            console.log(err);
            res.status(500).send('something went wrong');
        }
    })

module.exports = adminRouter;