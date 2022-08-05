const express = require("express");
const Skill = require("../model/skillsModel");

const skillsRouter = express.Router();

skillsRouter
  .route("/")
  .all(async (req, res, next) => {
    next();
  })
  .post(async (req, res) => {
    try {
      const newSkill = new Skill(req.body);
      const data = await newSkill.save();
      res.send(data);
    } catch (err) {
      res.status(500).send("something wrong happened");
    }
  })
  .get(async (req, res) => {
    try {
      const data = await Skill.find();
      res.send(data);
    } catch (err) {
      res.status(500).send("something wrong happened");
    }
  });

skillsRouter
  .route("/solo/:id")
  .all(async (req, res, next) => {
    next();
  })
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const data = await Skill.findById(id);
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  })
  .put(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Skill.findByIdAndUpdate(id, req.body, { new: true });
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Skill.findByIdAndDelete(id);
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  });
skillsRouter
  .route("/many")
  .post(async (req, res) => {
    try {
      const data = await Skill.insertMany(req.body);
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  })
  .delete(async (req, res) => {
    try {
      const data = await Skill.deleteMany();
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  });

skillsRouter.get("/development", async (req, res) => {
  try {
    const data = await Skill.find({ cat: "development" });
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
skillsRouter.get("/design", async (req, res) => {
  try {
    const data = await Skill.find({ cat: "design" });
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
skillsRouter.get("/automation", async (req, res) => {
  try {
    const data = await Skill.find({ cat: "automation" });
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
skillsRouter.get("/computer", async (req, res) => {
  try {
    const data = await Skill.find({ cat: "computer" });
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
module.exports = skillsRouter;
