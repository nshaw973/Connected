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
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;