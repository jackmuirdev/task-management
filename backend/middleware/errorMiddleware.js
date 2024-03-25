// Middleware for handling "Not Found" errors
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Generic error handler middleware
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'Internal Server Error';

  if (res.headersSent) {
    // If headers have already been sent, pass the error to the default Express error handler
    return next(err);
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};