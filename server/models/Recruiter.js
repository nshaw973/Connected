const { Schema, model } = require('mongoose');
const User = require('./User');

const recruiterSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    jobs: {
      type: [String],
      default: [],
    },
    desiredRoles: {
      type: [String],
      default: [],
    },
    companies: {
      type: [String],
      default: [],
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      ref: 'Developer',
      default: [],
    },
    bookmarks: {
      type: [Schema.Types.ObjectId],
      ref: 'Developer',
      default: [],
    },
  });
 
module.exports = recruiterSchema