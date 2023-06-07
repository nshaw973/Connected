const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Query {
    me: User
   }

    type User {
    username: String!
    email: String!
    password: String!

    }
`;

module.exports = typeDefs;
