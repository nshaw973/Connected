// name, githublink, description, deployed link, img (no image files can be passed, must be url!),
const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 50,
      },
      githubLink: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
      },
      deploymentLink: {
        type: String,
        required: false,
        unique: true,
        maxLength: 50,
      },
      description: {
        type: String,
        required: false,
        maxLength: 2500,
      },
      img: {
        type: String,
        required: false,
        maxLength: 150,
      },
  });

  const Project = model('Project', projectSchema);

  module.exports = projectSchema