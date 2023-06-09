const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
  recruiter: [{
      type: Schema.Types.ObjectId,
      ref: 'Recruiter',
  }],
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  company: {
    type: String,
    required: true,
    maxLength: 30,
  },
  description: {
    type: String,
    required: true,
    maxLength: 2500,
  },
  salary: {
    type: Number,
    required: true,
  },
  applicants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

jobSchema.virtual('applicantCount').get(function () {
  return this.applicants.length;
});

const Job = model('Job', jobSchema);

module.exports = Job;