// creates a jason web token which will expire in 5 hours treaby giving a user 5 hours of operation after a single authentication
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Retrieve token from Authorization header
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

