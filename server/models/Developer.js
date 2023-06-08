const { Schema, model } = require('mongoose');
const projectSchema = require('./Project').schema;
const jobSchema = require('./Jobs').schema;

const developerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
  githubUrl: {
    type: String,
  },
  jobsAppliedTo: {
    type: Schema.Types.ObjectId,
    ref: "Jobs",
  },
  favoriteRecruiters: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

module.exports = developerSchema;
