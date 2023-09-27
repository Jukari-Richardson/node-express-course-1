// controllers/authController.js
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

// const generateToken = (username,password) => {
//   return jwt.sign({username, password}, process.env.SECRET, {
//     expiresIn: process.env.TOKEN_LIFETIME,
//   });
// };

// const toen = jwt.sign({username}, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })

const login = (req, res) => {
  const username = req.body.username;
  const token = jwt.sign({username}, process.env.SECRET)
  res.status(200).json({ token });
};    

const hello =  (req, res) =>
{
    res.status(200).json({msg: `Hello, ${req.user}!`});
    //Map the /hello route to the authMiddleware function and then to route handler function
};

module.exports = { login, hello };
