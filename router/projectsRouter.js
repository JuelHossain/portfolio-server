const express = require("express");
const Project = require("../model/projectsModel");

const projectsRouter = express.Router();

projectsRouter
  .route("/")
  .all(async (req, res, next) => {
    next();
  })
  .post(async (req, res) => {
    try {
      const newProject = new Project(req.body);
      const data = await newProject.save();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .get(async (req, res) => {
    try {
      const data = await Project.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });

projectsRouter
  .route("/:id")
  .all(async (req, res, next) => {
    next();
  })
  .get(async (req, res) => {
    try {
      const data = await Project.findOne({ _id: req.params.id });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .put(async (req, res) => {
    try {
      const data = await Project.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: req.body,
        }
      );
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await Project.deleteOne({
        _id: req.params.id,
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = projectsRouter;
