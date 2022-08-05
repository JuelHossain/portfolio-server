const createHttpError = require("http-errors");

const notFoundHandler = (req, res, next) => {
  next(createHttpError(404, "your requested content was not found"));
};

const errorHandler = (err, req, res, next) => {
  if (!req.timeout) {
    res.send(err);
    next();
  } else {
    next(err);
  }
};

module.exports = { notFoundHandler, errorHandler };
