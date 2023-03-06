const User = require('../models/user');

const validateEmail = (email) => {
  const emailCondition =
    /([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/;
  return String(email).toLowerCase().match(emailCondition);
};

const validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

const validateUsername = async (username) => {
  let a = false;

  do {
    let check = await User.findOne({ username });
    if (check) {
      username += (new Date() * Math.random()).toString().substring(0, 1);
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};

module.exports = {
  validateEmail,
  validateLength,
  validateUsername,
};
