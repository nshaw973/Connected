const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
   type Query {
    me: User
   }

    type User {
    username: String!
    email: String!
    password: String!

    }
=======
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

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
>>>>>>> 232f522641ad59596c24b299805efe345856c2ce
`;

module.exports = typeDefs;
