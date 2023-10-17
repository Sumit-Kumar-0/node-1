const notFoundErrorHandler = (req, res, next) => {
    const error = new Error(`Can't find this URL on the server!`);
    error.statusCode = 404;
    next(error);
  };

  module.exports = notFoundErrorHandler;