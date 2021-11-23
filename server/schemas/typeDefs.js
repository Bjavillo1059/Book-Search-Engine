const { gql, } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
  }

  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    authors: [String]
}


  type Query {    
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(input: savedBook): User
    removeBook(bookId: ID!): User        
  }
`;

module.exports = typeDefs;