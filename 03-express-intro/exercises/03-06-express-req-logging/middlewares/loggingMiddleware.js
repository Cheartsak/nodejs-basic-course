export const loggingMiddleware = (req, res, next) => {
  const time = new Date();
  console.log(time, req.method, req.originalUrl);
  next();
};
