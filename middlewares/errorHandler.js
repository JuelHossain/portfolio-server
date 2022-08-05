const createHttpError = require("http-errors");

const notFoundHandler = (req, res, next) => {
  next(createHttpError(404, "your requested content was not found"));
};

const errorHandler = (err, req, res, next) => {
  res.send(err);
  next(err);
};

module.exports = { notFoundHandler, errorHandler };
