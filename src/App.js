import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Link } from 'react-router-dom';
import book1 from './bookimages/book-1.jpg';
import book2 from './bookimages/book-2.jpg';
import book3 from './bookimages/book-3.jpg';
import book4 from './bookimages/book-4.jpg';
import book5 from './bookimages/book-5.jpg';
import book6 from './bookimages/book-6.jpg';


function App() {
  return (
    <div className='container-fluid'>
      {
        <div className="App">

        <h1>book<span className="badge badge-secondary">Shelf</span></h1>

        <hr></hr>

        <div className='row'>
          <div className='col-md-4'>
           
        <h2 className="alert alert-primary" role="alert">Currently Reading</h2>
        <div className='card-columns'>
          <div className='card'>
            <img src={book1} alt='book-1' className='card-img-top' />
            <div className='card-body'>

              <div className='row'>
                <div>
                  <h3 className='card-title'>book 1</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book2} alt='book-2' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 2</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book3} alt='book-3' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 3</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book4} alt='book-4' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 4</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>



        </div>
</div>
<div className='col-md-4'>
      
        <h2 className="alert alert-primary" role="alert">Want to Read</h2>
        <div className='card-columns'>
          <div className='card'>
            <img src={book1} alt='book-1' className='card-img-top' />
            <div className='card-body'>

              <div className='row'>
                <div>
                  <h3 className='card-title'>book 1</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book2} alt='book-2' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 2</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book3} alt='book-3' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 3</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book4} alt='book-4' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 4</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>



        </div>

      </div>
      <div className='col-md-4'>
        <h2 className="alert alert-primary" role="alert">Read</h2>
        <div className='card-columns'>
          <div className='card'>
            <img src={book1} alt='book-1' className='card-img-top' />
            <div className='card-body'>

              <div className='row'>
                <div>
                  <h3 className='card-title'>book 1</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book2} alt='book-2' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 2</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book3} alt='book-3' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 3</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>

          <div className='card'>
            <img src={book4} alt='book-4' className='card-img-top' />
            <div className='card-body'>
              
              <div className='row'>
                <div>
                  <h3 className='card-title'>book 4</h3>
                </div>
                <div>
                  <h6><span class="badge badge-primary">want to read</span></h6>
                </div>
              </div>


              <select className='form-control'>
                <option disabled value='-1' selected>Move To</option><option>currently</option>
                <option>want to read</option>
                <option>read</option>
              </select>

            </div>
          </div>



        </div>

        </div>
        </div>

      </div>
      
      }
      </div>
  );
}

export default App;
