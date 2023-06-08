const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const Developer = require('../models/Developer');
const Recruiter = require('../models/Recruiter');
const Job = require('../models/Job');
const Project = require('../models/Project');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('Error, you need to be logged in!');
    },
    getDeveloperById: async (parent, { id }, context) => {
      const developer = await Developer.findById(id);
      return developer;
    },
    getRecruiterById: async (parent, { id }, context) => {
      const recruiter = await Recruiter.findById(id);
      return recruiter;
    },
    getJobById: async (parent, { id }, context) => {
      const job = await Job.findById(id);
      return job;
    },
    getProjectById: async (parent, { id }, context) => {
      const project = await Project.findById(id);
      return project;
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, username, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    createDeveloper: async (parent, { githubUrl }, context) => {
      const developer = await Developer.create({
        githubUrl
      });
      return developer;
    },
    createRecruiter: async (parent, { company }, context) => {
      const recruiter = await Recruiter.create({
        company,
      });
      return recruiter;
    },
    createJob: async (parent, { title, description, salary }, context) => {
      const job = await Job.create({
        title,
        description,
        salary,
      });
      return job;
    },
    createProject: async (parent, { projectName, githubLink, deploymentLink, description, img }, context) => {
      const project = await Project.create({
        projectName,
        githubLink,
        deploymentLink,
        description,
        img,
      });
      return project;
    },
  },

  Query: {
    searchJobsByTitle: async (parent, { searchTerm }, context) => {
      const jobs = await Job.searchByTitle(searchTerm);
      return jobs;
    },

    searchJobsBySalary: async (parent, { minSalary, maxSalary }, context) => {
      const jobs = await Job.searchBySalary(minSalary, maxSalary);
      return jobs;
    }
  }
};

module.exports = resolvers;
