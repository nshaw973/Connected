const { AuthenticationError } = require('apollo-server-express');
const {
  User,
  Job,
  Donation,
} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
          success_url: `${url}/success`,
          cancel_url: `${url}/cancel`,
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



    createJob: async (parent, { title, company, description, salary }, context) => {
      const job = await Job.create({
        title,
        company,
        description,
        salary,
      });
      return job.toObject();
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
    deleteJob: async (parent, { jobId }, context) => {
      const deletedJob = await Job.findByIdAndDelete(jobId);
  
      // remove the deleted job from the jobs array of all recruiters
      await Recruiter.updateMany(
        { jobs: jobId },
        { $pull: { jobs: jobId } }
      );
      // remove the deleted job from the jobsAppliedTo array of all developers
      await Developer.updateMany(
        { jobsAppliedTo: jobId },
        { $pull: { jobsAppliedTo: jobId } }
      );
      return deletedJob;
    },

    updateJobById: async (parent, { jobId, updatedFields }, context) => {
      const updatedJob = await Job.findByIdAndUpdate(jobId, updatedFields, { new: true });
      return updatedJob;
    },
  
    updateDeveloper: async (parent, { developerId, githubUrl, skills } ) => {
      const updatedDeveloper = await Developer.findByIdAndUpdate(
        developerId,
        { githubUrl, skills },
        { new: true }
      );
      return updatedDeveloper;
    },
  },

  Query: {
/*     searchJobsByTitle: async (parent, { searchTerm }, context) => {
      const jobs = await Job.searchByTitle(searchTerm);
      return jobs;
    },

    searchJobsBySalary: async (parent, { minSalary, maxSalary }, context) => {
      const jobs = await Job.searchBySalary(minSalary, maxSalary);
      return jobs;
    } */
  }
};

module.exports = resolvers;
