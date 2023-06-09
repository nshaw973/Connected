const { Schema, model } = require('mongoose');
const User = require('./User');
const jobSchema = require('./Job');

const recruiterSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    company: {
      type: String,
      required: true,
      maxLength: 50,
    },
    jobs: [jobSchema],
    desiredRoles: {
      type: String,
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });
 
module.exports = recruiterSchema