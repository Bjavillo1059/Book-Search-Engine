import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: ID!
    $authors: [String]!
    $title: String!
    $description: String!
    $image: String!
  ) {
    saveBook(
      bookId: $bookId
      authors: $authors
      title: $title
      description: $description
      image: $image
    ) {
      bookId
      authors
      description
      title
      image
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
    $authors: [String]!
    $title: String!
    $description: String!
    $image: String!
  ) {
    removeBook(
      bookId: $bookId
      authors: [$authors]
      title: $title
      description: $description
      image: $image
    ) {
      bookId
      authors
      description
      title
      image
    }
  }
`;
