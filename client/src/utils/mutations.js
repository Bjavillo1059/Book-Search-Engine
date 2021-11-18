import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
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
    $link: String!
  ) {
    saveBook(
      bookId: $bookId
      authors: [$authors]
      title: $title
      description: $description
      image: $image
      link: $link
    ) {
      bookId
      authors
      description
      title
      image
      link
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
    $link: String!
  ) {
    removeBook(
      bookId: $bookId
      authors: [$authors]
      title: $title
      description: $description
      image: $image
      link: $link
    ) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;
