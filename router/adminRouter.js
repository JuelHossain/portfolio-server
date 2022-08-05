const express = require("express");
const Admin = require("../model/adminModel");
const bcrypt = require("bcrypt");
const AdminStatus = require("../model/adminStatusModel");
const createHttpError = require("http-errors");
require("dotenv").config();
const adminRouter = express.Router();
const secret = process.env.SECRET;
adminRouter
  .route("/")
  .all(async (req, res, next) => {
    if (req.headers.secret === "true") {
      next();
    } else {
      res.send(createHttpError(440, "unauthorized access"));
    }
  })
  .get(async (req, res) => {
    try {
      const data = await Admin.findOne();
      const { admin } = await data;
      const { password } = req.headers;
      if (password) {
        console.log("verifying password");
        const hashedPassword = await data.password;
        const matched = await bcrypt.compare(password, hashedPassword);
        res.json({ matched });
      } else {
        res.json({ admin });
      }
    } catch (err) {
      res.status(440).json("something wrong happened");
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
      res.status(440).send("something went wrong");
    }
  })
  .put(async (req, res) => {
    try {
      console.log("Changing admin status");
      const { admin } = await Admin.findOneAndUpdate(
        { secret },
        { $set: req.body },
        { new: true }
      );
      res.send({ admin });
    } catch (err) {
      res.status(440).send("something wrong happened");
    }
  });

module.exports = adminRouter;
