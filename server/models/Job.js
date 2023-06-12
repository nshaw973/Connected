const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;


// // **** TESTING different model ******* // 

// const { Schema, model } = require('mongoose');

// const jobSchema = new Schema({

//   title: {
//     type: String,
//     required: true,
//     maxLength: 50,
//   },
//   company: {
//     type: String,
//     required: true,
//     maxLength: 30,
//   },
//   description: {
//     type: String,
//     required: true,
//     maxLength: 2500,
//   },
//   salary: {
//     type: Number,
//     required: true,
//   }

// }
//   // {
//   //   toJSON: {
//   //     virtuals: true,
//   //   },
//   //   id: false,
//   // }
// );


// const Job = model('Job', jobSchema);

// module.exports = Job;