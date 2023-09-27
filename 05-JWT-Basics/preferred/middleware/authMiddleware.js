const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    req.user = decoded.username;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
