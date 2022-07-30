const express = require('express');

const skillsRouter = express.Router();

skillsRouter.route('/')
    .all(async (req, res, next) => {
        next();
    })
    .post(async (req, res) => {
    
    })
    .get(async (req, res) => {
    
    })
    .put(async (req, res) => {
    
    })
    .delete(async (req, res) => {
    
    });

module.exports= skillsRouter