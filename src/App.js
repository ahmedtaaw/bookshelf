import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';


const books=[
  {
    'id':'book1', 
    'name':'book-1',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-1.jpg'

  },
  {
    'id':'book2',
    'name':'book-2',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-2.jpg'
  },
  {
    'id':'book3',
    'name':'book-3',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-3.jpg'
  },
  {
    'id':'book4',
    'name':'book-4',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-4.jpg'
  },
  {
    'id':'book5',
    'name':'book-5',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-5.jpg'
  },
  {
    'id':'book6',
    'name':'book-6',
    'avatarURL':'http://localhost:5001/project-1/bookimages/book-6.jpg'
  },
]


function App() {
  return (
    <div className='container-fluid'>
        <h1>book<span className="badge badge-secondary">Shelf</span></h1>
        <hr></hr>
      <BooksList books={books}/>
    </div>
  );
}

export default App;
