import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

// import { getMe, deleteBook } from '../utils/API';
import { useQuery } from '@apollo/client';

// import MeList from '../components/MeList';

import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import { removeBookId } from '../utils/localStorage';

// hooks can only be used inside of components

const SavedBooks = () => {
  // const [userData, setUserData] = useState({});

  // this variable is used to store the user data from the local storage
  const { loading, data } = useQuery(GET_ME);

  // this userData variable is used to store the user data from the local storage
  const userData = data ?.me || [];

  // if the user is not logged in, redirect to the login page
    return (
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            // this 
            {loading ? (
              <div>loading...</div>
            ) : (
              <div
              me={userData}
              />
              )}
          </div>
        </div>
      </main>
    )

    // useEffect(() => {
    // const getUserData = async () => {
    //   try {
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //       return false;
    //     }

    //     const response = await getMe(token);

    //     if (!response.ok) {
    //       throw new Error('something went wrong!');
    //     }

    //     const user = await response.json();
    //     setUserData(user);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

  //   getUserData();
  // }, [userDataLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  // const handleDeleteBook = async (bookId) => {
    

  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

    // const [ removeBook, { data } ] = useMutation(REMOVE_BOOK);
    
    // try {
    //   const { response } = removeBook({
    //     variables: { bookId },
    //   });
    //   // const response = await deleteBook(bookId, token);

  //   //   if (!response.ok) {
  //   //     throw new Error('something went wrong!');
  //   //   }

  //   //   // const updatedUser = await response.json();
  //   //   // setUserData(updatedUser);
  //   //   // upon success, remove book's id from localStorage
  //   //   removeBookId(bookId);
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }
  // };

  // // if data isn't here yet, say so
  // if (!userDataLength) {
  //   return <h2>LOADING...</h2>;
  // }

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
        {/* <CardColumns>
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
        </CardColumns> */}
      </Container>
    </>
  );
};

export default SavedBooks;
