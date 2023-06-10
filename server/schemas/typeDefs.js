const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    recruiter: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }
  type Developer {
    id: ID!
    githubUrl: String!
  }
  type Recruiter {
    id: ID!
    company: String!
  }
  type Job {
    id: ID!
    title: String!
    description: String!
    salary: Float!
  }
  type Project {
    id: ID!
    projectName: String!
    githubLink: String!
    deploymentLink: String!
    description: String!
    img: String!
  }

  type Donation {
    id: ID!
    amount: Int!
    status: String!
    donor: User!
  }

  type Checkout {
    session: ID
  }

  type Query {
    user(username: String!): User
    me: User
    donation(_id: ID, donationAmount: Float): Donation
    checkout(donation: ID!): Checkout
    getDeveloperById(id: ID!): Developer
    getRecruiterById(id: ID!): Recruiter
    getJobById(id: ID!): Job
    getProjectById(id: ID!): Project
    getAllJobs: [Job!]!
    jobs(title: String!): [Job!]!
    recruiters(firstName: String!, lastName: String!, company: String!): [Recruiter!]!
    developers(firstName: String!, lastName: String!, company: String!): [Developer!]!
  }
  

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, recruiter: Boolean!): Auth
    login(email: String!, password: String!): Auth
    createCheckoutSession(amount: Int!, donorId: ID): String!
    createDeveloper(githubUrl: String!): Developer!
    createRecruiter(company: String!): Recruiter!
    createJob(title: String!, description: String!, salary: Float!): Job!
    deleteJob(jobId: ID!): Job
    updateJobById(jobId: ID!, title: String!, description: String!, salary: Float!): Job
    updateRecruiter(recruiterId: ID!, company: String!): Recruiter!
    updateDeveloper(developerId: ID!, githubUrl: String!): Developer!
    createProject(
      projectName: String!
      githubLink: String!
      deploymentLink: String!
      description: String!
      img: String!
    ): Project!
  }
  schema {
    mutation: Mutation
    query: Query
  }
`;

module.exports = typeDefs;
