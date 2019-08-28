import React from 'react';
import propTypes from 'prop-types';

function BookCard({ book, onDeleteBook, onUpdateBook }) {
  const updateInputSelect = (book, e) => {
    onUpdateBook(book, e);
  };
  return (
    <div className="card" key={book.id}>
      {onDeleteBook && (
        <button
          onClick={() => onDeleteBook(book)}
          className="btn btn-block btn-primary"
        >
          Remove Book from this list
        </button>
      )}
      {book.imageLinks && (
        <img
          src={book.imageLinks.thumbnail}
          alt={book.title}
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <h5 className="card-title">{book.title}</h5>

            <h6>
              <span className="badge badge-primary">{book.shelf}</span>
            </h6>
          </div>
        </div>

        <select
          value={book.shelf ? book.shelf : -1}
          onChange={event => updateInputSelect(book, event.target.value)}
          className="form-control"
        >
          {!book.shelf && <option value="-1">None</option>}
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">want to read</option>
          <option value="read">read</option>
        </select>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: propTypes.object.isRequired,
  onDeleteBook: propTypes.func,
  onUpdateBook: propTypes.func.isRequired,
};

export default BookCard;
