import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import BookListContainer from './BookListContainer';

class BooksList extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onDeleteBook: propTypes.func.isRequired,
    onUpdateBook: propTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };

  clearQuery = () => {
    this.updateQuery('');
  };

  render() {
    const { query } = this.state;
    const { books, onDeleteBook, onUpdateBook } = this.props;
    const showingBooksCR =
      query === 'currentlyReading'
        ? books
        : books.filter(function(i) {
            return i.shelf === 'currentlyReading';
          });
    const showingBooksRR =
      query === 'read'
        ? books
        : books.filter(function(i) {
            return i.shelf === 'read';
          });
    const showingBooksWR =
      query === 'wantToRead'
        ? books
        : books.filter(function(i) {
            return i.shelf === 'wantToRead';
          });

    return (
      <div>
        <Link to="/books-search" className="btn btn-primary">
          Search
        </Link>
        <h2>Your Books List</h2>
        <BookListContainer title="Currently Reading">
          {showingBooksCR.map(book => (
            <BookCard
              key={book.id}
              onDeleteBook={onDeleteBook}
              onUpdateBook={onUpdateBook}
              book={book}
            />
          ))}
        </BookListContainer>

        <BookListContainer title="Want to Read">
          {showingBooksWR.map(book => (
            <BookCard
              key={book.id}
              onDeleteBook={onDeleteBook}
              onUpdateBook={onUpdateBook}
              book={book}
            />
          ))}
        </BookListContainer>

        <BookListContainer title="Read">
          {showingBooksRR.map(book => (
            <BookCard
              key={book.id}
              onDeleteBook={onDeleteBook}
              onUpdateBook={onUpdateBook}
              book={book}
            />
          ))}
        </BookListContainer>
      </div>
    );
  }
}

export default BooksList;
