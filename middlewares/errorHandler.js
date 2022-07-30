const createHttpError = require("http-errors");

const notFoundHandler = (req, res, next) => {
    next(createHttpError(404, "your requested content was not found"));
}

const errorHandler = (err, req, res, next) => {
    console.log('this is the error',err);
    res.send(err);
    next();
}

module.exports = { notFoundHandler, errorHandler };