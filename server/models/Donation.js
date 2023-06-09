const { Schema, model } = require('mongoose');


const donationSchema = new Schema({
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    donorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  });
  
  const Donation = model('Donation', donationSchema);
  
  module.exports = Donation;