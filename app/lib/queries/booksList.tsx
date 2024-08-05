import { useQuery, useMutation, gql } from '@apollo/client';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $author: String!) {
    createBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String, $author: String) {
    updateBook(id: $id, title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [createBook] = useMutation(CREATE_BOOK);
  const [updateBook] = useMutation(UPDATE_BOOK);
  const [deleteBook] = useMutation(DELETE_BOOK);

  const handleCreateBook = async () => {
    try {
      const { data } = await createBook({ variables: { title: 'New Book', author: 'New Author' } });
      console.log('New book created:', data.createBook);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleUpdateBook = async (id: any, title: string, author: string) => {
    try {
      const { data } = await updateBook({ variables: { id, title, author } });
      console.log('Book updated:', data.updateBook);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (id: any) => {
    try {
      const { data } = await deleteBook({ variables: { id } });
      console.log('Book deleted:', data.deleteBook);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={handleCreateBook}>Create Book</button>
      <ul>
        {data.books.map((book: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; author: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={book.id}>
            {book.title} by {book.author}{' '}
            <button onClick={() => handleUpdateBook(book.id, 'Updated Title', 'Updated Author')}>
              Update
            </button>{' '}
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;