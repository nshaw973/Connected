const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Recruiter = require('./Recruiter'); 
const Developer = require('./Developer'); 

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
  recruiter: {
    type: Boolean,
    required: true
  }
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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);


module.exports = User;
