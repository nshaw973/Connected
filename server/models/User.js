const { Schema, model } = require('mongoose');
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
      match: [/.+@.+\..+/, 'Must provide a valid email address.'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxLength: 18,
    },
    recruiter: {
        type: Schema.Types.ObjectId,
        ref: 'Recruiter',
      },
      developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer',
      },
});

module.exports = userSchema