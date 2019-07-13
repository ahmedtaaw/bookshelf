import React, {Component} from 'react';
import propTypes from 'prop-types';

class BooksList extends Component{
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
        console.log(this.props);

        const{query}=this.state
        const {books,booksCR, onDeleteBook}=this.props

        //if query is empty
        const showingBooks = query === ''
        //then show our books to be original books 
        ? books
        //if query state not empty
        : books.filter((b)=>
            
            b.title.toLowerCase().includes(query.toLowerCase())
        )

        const showingBooksCR = query === "currentlyReading" ? books
        :books.filter(function(i){
            return i.shelf==="currentlyReading"
        })
        const showingBooksRR = query === "read" ? books
        :books.filter(function(i){
            return i.shelf==="read"
        })
        const showingBooksWR = query === "wantToRead" ? books
        :books.filter(function(i){
            return i.shelf==="wantToRead"
        })


        return(
            
            <div>
                
                <div className="row">
                <div className="col-md-6">
                    <div className='form-group'>
                   
                    <input className="form-control" type="text" placeholder="search book"
                    value={query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                    />
                    </div>
                </div>
                <div className='col-md-6'>
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
            <h2 className="alert alert-primary" role="alert">Currently Reading</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className='card-columns'>
                        {
                            showingBooksCR.map((book)=>(
                               
                                <div className='card' key={book.id}>
                                    <button
                                    onClick={()=>onDeleteBook(book)} className="btn-primary"
                                    >Remove Book from this list</button>
                                <img src={book.imageLinks.thumbnail} alt={book.title} className='card-img-top' />
                                <div className='card-body'>
                    
                                  <div className='row'>
                                    <div className="col-md-12">
                                      <h5 className='card-title'>{book.title}</h5>
                                    
                                      <h6><span className="badge badge-primary">{book.shelf}</span></h6>
                                    </div>
                                  </div> 
                    
                    
                                  <select className='form-control'>
                                    <option disabled value='-1' defaultValue>Move To</option><option>currently</option>
                                    <option>want to read</option>
                                    <option>read</option>
                                  </select>
                    
                                </div>
                              </div>
                            ))
                        }
                      </div>
                </div>
            </div>
            
            <h2 className="alert alert-primary" role="alert">Want to Read</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className='card-columns'>
                        {
                            showingBooksWR.map((book)=>(
                               
                                <div className='card' key={book.id}>
                                    <button
                                    onClick={()=>onDeleteBook(book)} className="btn-primary"
                                    >Remove Book from this list</button>
                                <img src={book.imageLinks.thumbnail} alt={book.title} className='card-img-top' />
                                <div className='card-body'>
                    
                                  <div className='row'>
                                    <div className="col-md-12">
                                      <h5 className='card-title'>{book.title}</h5>
                                    
                                      <h6><span className="badge badge-primary">{book.shelf}</span></h6>
                                    </div>
                                  </div> 
                    
                    
                                  <select className='form-control'>
                                    <option disabled value='-1' defaultValue>Move To</option><option>currently</option>
                                    <option>want to read</option>
                                    <option>read</option>
                                  </select>
                    
                                </div>
                              </div>
                            ))
                        }
                      </div>
                </div>
            </div>
            
            <h2 className="alert alert-primary" role="alert">Read</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className='card-columns'>
                        {
                            showingBooksRR.map((book)=>(
                               
                                <div className='card' key={book.id}>
                                    <button
                                    onClick={()=>onDeleteBook(book)} className="btn-primary"
                                    >Remove Book from this list</button>
                                <img src={book.imageLinks.thumbnail} alt={book.title} className='card-img-top' />
                                <div className='card-body'>
                    
                                  <div className='row'>
                                    <div className="col-md-12">
                                      <h5 className='card-title'>{book.title}</h5>
                                    
                                      <h6><span className="badge badge-primary">{book.shelf}</span></h6>
                                    </div>
                                  </div> 
                    
                    
                                  <select className='form-control'>
                                    <option disabled value='-1' defaultValue>Move To</option><option>currently</option>
                                    <option>want to read</option>
                                    <option>read</option>
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


export default BooksList;