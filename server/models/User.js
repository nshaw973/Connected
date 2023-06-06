const { Schema, model } = require("mongoose");
const developerSchema = require("./Developer");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 16,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 100,
    match: [/.+@.+\..+/, "Must provide a valid email address."],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 18,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30,
  },
  // role: {
  //   type: String,
  //   required: true,
  //   default: "Developer",
  // },
  // // this will only get passed through if you select recruiter option via the front-end 
  // company : {
  //   type: String
  // },
  // bio: {
  //   type: String,
  //   required: false,
  //   maxLength: 2000,
  // },
  // favoriteDevelopers: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // favoriteRecruiters: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // devInfo: [developerSchema]
});

const User = model('User', userSchema)

module.exports = User;
