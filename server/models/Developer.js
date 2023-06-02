const { Schema, model } = require('mongoose');
const User = require('./User');


const developerSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    role: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    projects: {
      type: [String],
      default: [],
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      ref: 'Recruiter',
      default: [],
    },
    bookmarks: {
      type: [Schema.Types.ObjectId],
      ref: 'Recruiter',
      default: [],
    },
  });

  module.exports = developerSchema