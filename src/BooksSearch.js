import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookListContainer from './BookListContainer';
import BookCard from './BookCard';
import allowedQueries from './allowedQueries';

class BooksSearch extends Component {
  static propTypes = {
    onUpdateBook: propTypes.func.isRequired,
    savedBooks: propTypes.array.isRequired,
  };

  state = {
    books: [],
    query: '',
  };

  onUpdateBook = (book, shelf) => {
    const newBooks = this.state.books.map(bk => {
      if (bk.id === book.id) {
        return { ...bk, shelf };
      }
      return bk;
    });
    this.setState({ books: newBooks });
    this.props.onUpdateBook(book, shelf);
  };

  checkForSavedBook = (books, savedBooks) => {
    let newBookIndex;
    let savedBookIndex;
    books.find((item, index) => {
      return savedBooks.forEach((book, iSB) => {
        if (item.id === book.id) newBookIndex = index;
        savedBookIndex = iSB;
      });
    });
    return { newBookIndex, savedBookIndex };
  };

  checkForAllowedQuery = (query, allowedArr) => {
    return (
      allowedQueries
        .map(function(item) {
          return item.toLowerCase();
        })
        .indexOf(query.toLowerCase()) !== -1
    );
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.replace(/\s+/g, ' '),
    }));
    if (this.checkForAllowedQuery(query, allowedQueries)) {
      BooksAPI.search(query).then(res => {
        let newBooks = res;
        const { newBookIndex, savedBookIndex } = this.checkForSavedBook(
          res,
          this.props.savedBooks,
        );
        if (newBookIndex !== -1) {
          newBooks[newBookIndex] = {
            ...newBooks[newBookIndex],
            shelf: this.props.savedBooks[savedBookIndex].shelf,
          };
        }
        this.setState({ books: newBooks });
      });
    } else {
      this.setState({ books: [] });
    }
  };

  clearQuery = () => {
    this.updateQuery('');
  };
  render() {
    this.updateInputSelect = (book, e) => {
      onUpdateBook(book, e);
    };
    const { query, books } = this.state;
    const { onUpdateBook } = this.props;
    return (
      <div>
        <Link to="/" className="btn btn-primary">
          Back to your books list
        </Link>
        <h2>Search in All Books</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="search book"
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12"></div>
        </div>
        <h2 className="alert alert-primary" role="alert">
          Books List
        </h2>
        <BookListContainer>
          {books.length > 0 &&
            books.map(book => (
              <BookCard
                key={book.id}
                onUpdateBook={this.onUpdateBook}
                book={book}
              />
            ))}
        </BookListContainer>
      </div>
    );
  }
}

export default BooksSearch;
