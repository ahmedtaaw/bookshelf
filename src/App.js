import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import * as BooksAPI from './BooksAPI';



class App extends Component{
  state={
    books:[]
    
  }

  componentDidMount(){
    //callbooksAPI then return promise
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }

  //remove book Method
  removeBook=(book)=>{
    this.setState((currentState)=>({
      books:currentState.books.filter((b)=>{
        return b.id !== book.id
      })
    }))
  }
  updateBookShelf=(book,newShelf)=>{
    BooksAPI.update(book,newShelf)
    this.componentDidMount()
  }


  render(){
  return (
    <div className='container'>
        <h1>book<span className="badge badge-secondary">Shelf</span></h1>
        <hr></hr>
        <Route exact path='/' render={()=>(
         <BooksList books={this.state.books} onDeleteBook={this.removeBook} onUpdateBook={this.updateBookShelf}/>
        )}/>
        <Route exact path='/books-search' render={()=>(
         <BooksSearch books={this.state.books} onDeleteBook={this.removeBook} onUpdateBook={this.updateBookShelf}/>
        )}/>
      </div>
  );
}
}

export default App;
