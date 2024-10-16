const roleAccessMiddleware = (...requiredRoles) => {
  return (req, res, next) => {
    console.log(requiredRoles,req.user);
    if (req.user && requiredRoles.includes(req.user.role)) {
      
        next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};

module.exports = roleAccessMiddleware;
