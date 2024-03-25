// Initiate asyncHandler function to handle async functions
export const asyncHandler = fn => (req, res, next) => {
  // Make sure to catch any errors and pass them along to the error handler
  Promise.resolve(fn(req, res, next)).catch(next);
}

