const { Schema, default: mongoose, Types } = require('mongoose');
const { ObjectId } = Types;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, 'username is required'],
      trim: true,
      text: true,
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'password is required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
