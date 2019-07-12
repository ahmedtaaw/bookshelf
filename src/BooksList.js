import React, {Component} from 'react';
import propTypes from 'prop-types';

class BooksList extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className='card-columns'>
                        {
                            this.props.books.map((book)=>(
                                
                                <div className='card' key={book.id}>
                                    <button
                                    onClick={()=>this.props.onDeleteBook(book)} className="btn-primary"
                                    >Remove Book from this list</button>
                                <img src={book.avatarURL} alt={book.name} className='card-img-top' />
                                <div className='card-body'>
                    
                                  <div className='row'>
                                    <div>
                                      <h3 className='card-title'>{book.name}</h3>
                                    </div>
                                    <div>
                                      <h6><span className="badge badge-primary">want to read</span></h6>
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
        
        )
    }
}

BooksList.propTypes={
    books: propTypes.array.isRequired,
    onDeleteBook: propTypes.func.isRequired
}

export default BooksList;