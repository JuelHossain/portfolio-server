const express = require("express");
const { errorHandler, notFoundHandler } = require("./middlewares/errorHandler");
const { connect } = require("mongoose");
const cors = require("cors");
const projectsRouter = require("./router/projectsRouter");
const skillsRouter = require("./router/skillsRouter");
const adminRouter = require("./router/adminRouter");
const aboutRouter = require("./router/aboutRouter");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// connecting mongoose
(async () => {
  try {
    await connect(process.env.URI);
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
})();

// routers
app.use("/projects", projectsRouter);
app.use("/skills", skillsRouter);
app.use("/admin", adminRouter);
app.use("/about", aboutRouter);

app.use(notFoundHandler);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log("app listening on port", process.env.PORT);
});
