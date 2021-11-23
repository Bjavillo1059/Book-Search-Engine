import React from "react";
import { Jumbotron, Container, CardColumns, Card, Button, } from "react-bootstrap";

// import { getMe, deleteBook } from '../utils/API';
import { useQuery, useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { GET_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
import { removeBookId } from "../utils/localStorage";

// hooks can only be used inside of components

const SavedBooks = () => {
  // this variable is used to store the user data from the local storage
  const { loading, data } = useQuery(GET_ME);
  // this variable uses the mutation to delete a book
  const [removeBook] = useMutation(REMOVE_BOOK);
  

  
  // this userData variable is used to store the user data from the local storage
  const userData = data?.me || [];

  
  const handleDeleteBook = async (bookId) => {
    // event.preventDefault();  

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      console.log(data);
      Auth.login(data.login.token);

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;