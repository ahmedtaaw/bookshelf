import React, {Component} from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

class BooksSearch extends Component{
    static propTypes={
        books: propTypes.array.isRequired,
        onDeleteBook: propTypes.func.isRequired
    }

    state={
        query:''
    }
    updateQuery=(query)=>{
        this.setState(()=>({
            query: query.trim()
        }))
    }


    clearQuery=()=>{
        this.updateQuery('')
    }
    render(){
        const{query}=this.state
        const {books, onDeleteBook}=this.props

        //if query is empty
        const showingBooks = query === ''
        //then show our books to be original books 
        ? books
        //if query state not empty
        : books.filter((b)=>
            
            b.title.toLowerCase().includes(query.toLowerCase())
        )
        return(
            <div>
                <Link 
            to="/"
            className="btn btn-primary"
            >Back to your books list</Link>
                <h2>Search in All Books</h2>
                <div className="row">
                <div className="col-md-12">
                    <div className='form-group'>
                   
                    <input className="form-control" type="text" placeholder="search book"
                    value={query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                    />
                    </div>
                </div>
                <div className='col-md-12'>
                    {
                        showingBooks.length != books.length &&(
                            <div>
                                <span>Now showing {showingBooks.length} of {books.length}</span>
                                <button onClick={this.clearQuery}>Show ALL</button>
                                </div>
                        )
                    }
                </div>
                </div>
                <h2 className="alert alert-primary" role="alert">Books List</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className='card-columns'>
                        {
                            showingBooks.map((book)=>(
                               
                                <div className='card' key={book.id}>
                                    <button
                                    onClick={()=>onDeleteBook(book)} className="btn btn-block btn-primary"
                                    >Remove Book from this list</button>
                                <img src={book.imageLinks.thumbnail} alt={book.title} className='card-img-top' />
                                <div className='card-body'>
                    
                                  <div className='row'>
                                    <div className="col-md-12">
                                      <h5 className='card-title'>{book.title}</h5>
                                    
                                      <h6><span className="badge badge-primary">{book.shelf}</span></h6>
                                    </div>
                                  </div> 
                    
                    
                                  <select value={book.shelf} className='form-control'>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">want to read</option>
                                    <option value="read">read</option>
                                  </select>
                    
                                </div>
                              </div>
                            ))
                        }
                      </div>
                </div>
            </div>
            
            </div>
        )
    }
}


export default BooksSearch;