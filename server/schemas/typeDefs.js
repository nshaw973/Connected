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
    profileImage: String
    favorites: [ID]!
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
    _id: ID!
    user: User
    agency: String!
    jobs: [Job]
    desiredRoles: [String]
  }

  type Job {
    _id: ID!
    title: String!
    company: String
    description: String!
    salary: Float
    recruiter: Recruiter
    jobAuthor: String
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
    users: [User]
    user(username: String!): User
    me: User
    jobs: [Job]
    recruiters: [Recruiter]
  }

  type Mutation {
    updateProfileImage(profileImage: String!): User
    addToFavorites(jobId: ID!): User
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, recruiter: Boolean!): Auth
    login(email: String!, password: String!): Auth
    createCheckoutSession(amount: Int!, donorId: ID): String!
    createDeveloper(githubUrl: String!): Developer!
    createRecruiter(company: String!): Recruiter!
    # createPost(title: String!, description: String!): Post!
    createJob(title: String!, company: String, description: String!, salary: Float, jobAuthor: String): Job!
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
`;

module.exports = typeDefs;
