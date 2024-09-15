const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Retrieve token from Authorization header
  const authHeader = req.get('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Set the user ID in the request object
    req.user = { id: decoded.user.id, role: decoded.user.role };
    
    next();
  } catch (err) {
    // Handle token expiration and other errors
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: 'Token has expired' });
    }
    console.error('Token verification failed:', err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
