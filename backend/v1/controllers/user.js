const bcrypt = require('bcrypt');
const User = require('../models/user');
const { validateLength } = require('../helpers/validation');
const { generateToken } = require('../helpers/token');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUsername = await User.findOne({ username });
    if (checkUsername) {
      return res.status(400).json({
        message:
          'The username already exists, please try with a different username',
      });
    }

    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters',
      });
    }

    const bcryptPassword = await bcrypt.hash(password, 12);

    const user = await new User({
      password: bcryptPassword,
      username,
    }).save();

    const token = generateToken({ id: user._id.toString() }, '7d');

    res.send({
      id: user._id,
      username: user.username,
      token: token,
      message: 'Register success!',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: 'The username you entered is not connected to an account',
      });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        message: 'Invalid credentials. Please try again',
      });
    }

    const token = generateToken({ id: user._id.toString() }, '7d');
    res.send({
      id: user._id,
      username: user.username,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
