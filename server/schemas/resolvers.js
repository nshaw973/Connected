// Insert Models
const { AuthenticationError } = require('apollo-server-express');
const {
  User,
  Job,
  Developer,
  Recruiter,
  Project,
  Donation,
} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

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
      { firstName, lastName, username, email, password, recruiter }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
        recruiter,
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

    createCheckoutSession: async (parent, { amount }, context) => {
      try {
        const url = new URL(context.headers.referer).origin;
        const id = context.user._id;
        // Create a new Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Donation',
                },
                unit_amount: amount,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${url}/success`, // Redirect URL after successful payment
          cancel_url: `${url}/cancel`, // Redirect URL after canceled payment
        });
        // Fetch the donor details from the User model
        const donor = await User.findById(id);
        if (!donor) {
          throw new Error('Donor not found');
        }

        // Store the donation details in MongoDB
        const donation = new Donation({
          amount,
          status: 'pending',
          donor: donor._id,
        });
        await donation.save();
        console.log(donation);
        return session.id;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create checkout session');
      }
    },

    createDeveloper: async (parent, { githubUrl }, context) => {
      const developer = await Developer.create({
        githubUrl,
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
    createProject: async (
      parent,
      { projectName, githubLink, deploymentLink, description, img },
      context
    ) => {
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
};

module.exports = resolvers;
