const { gql, } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
  }

  input BookSaved {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
}


  type Query {    
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(input: BookSaved!): User
    removeBook(bookId: String!): User        
  }
`;

module.exports = typeDefs;