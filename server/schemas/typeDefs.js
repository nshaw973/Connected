const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
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
  type Query {
    user(username: String!): User
    me: User
  }
  type Query {
    getDeveloperById(id: ID!): Developer
  }
  type Query {
    getRecruiterById(id: ID!): Recruiter
  }
  type Query {
    getJobById(id: ID!): Job
  }
  type Query {
    getProjectById (id: ID!): Project
  }
  
  

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createDeveloper(githubUrl: String!): Developer!
    createRecruiter(company: String!): Recruiter!
    createJob(title: String!, description: String!, salary: Float!): Job!
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
