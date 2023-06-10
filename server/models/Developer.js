const { Schema, model } = require('mongoose');
const projectSchema = require('./Project').schema;
const jobSchema = require('./Job').schema;

const developerSchema = new Schema({
/*   user: [User.schema], */
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
  githubUrl: {
    type: String,
  },
  skills: {
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

const Developer = model('Developer', developerSchema);

module.exports = developerSchema;
