const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
  res.send("this is the server side of https://juel-hossain.com");
});
module.exports = homeRouter;
