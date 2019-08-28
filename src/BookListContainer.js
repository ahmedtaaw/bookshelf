import React from 'react';
import PropTypes from 'prop-types';

const BookListContainer = ({ title, children }) => {
  return (
    <React.Fragment>
      {title && (
        <h2 className="alert alert-primary" role="alert">
          {title}
        </h2>
      )}
      <div className="row">
        <div className="col-md-12">
          <div className="card-columns">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

BookListContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BookListContainer;
