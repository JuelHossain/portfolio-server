const express = require("express");
const About = require("../model/aboutModel");
const aboutRouter = express.Router();

// getting about information
aboutRouter
  .route("/")
  .all(async (req, res, next) => {
    next();
  })
  .post(async (req, res) => {
    try {
      const newAbout = new About(req.body);
      const data = await newAbout.save();
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  })
  .get(async (req, res) => {
    try {
      const data = await About.find();
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  });

// single operations
aboutRouter
  .route("/solo/:id")
  .all(async (req, res, next) => {
    console.log("doing single operation");
    next();
  })
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await About.findById(id);
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong ");
    }
  })
  .put(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await About.findByIdAndUpdate(id, req.body, { new: true });
      res.send(data);
    } catch (err) {
      res.status(500).send("something went wrong ");
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.params.id;
      const data = await About.findByIdAndDelete(id);
      res.send(data);
    } catch (err) {
        console.log(err);
      res.status(500).send("something went wrong ");
    }
  });
aboutRouter.post("/many", async (req, res) => {
  try {
    const data = await About.insertMany(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});

// getting education details
aboutRouter.get("/educations", async (req, res) => {
  try {
    const data = await About.find({ cat: "education" });
    res.send(data);
  } catch (err) {
    res.status(500).send("something went wrong ");
  }
});

// getting course details
aboutRouter.get("/courses", async (req, res) => {
  try {
    const data = await About.find({ cat: "courses" });
    res.send(data);
  } catch (err) {
    res.status(5000).send("something went wrong ");
  }
});

// getting experiences details
aboutRouter.get("/experiences", async (req, res) => {
  try {
    const data = await About.find({ cat: "experiences" });
    res.send(data);
  } catch (err) {
    res.status(5000).send("something went wrong ");
  }
});

module.exports = aboutRouter;
