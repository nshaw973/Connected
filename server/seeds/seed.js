const db = require('../config/connection');
const { Job } = require('../models');
const jobsData = require('./jobsData.json');

db.once('open', async () => {
  try {
    // Clean the database by removing all existing job documents
    // await Jobs.deleteMany({});

    // Bulk create each model
    const jobs = await Job.insertMany(jobsData);

    console.log('Jobs data inserted successfully', jobs);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
});