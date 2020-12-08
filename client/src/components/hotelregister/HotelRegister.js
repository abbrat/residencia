import React, { Fragment, useState, useContext, useEffect } from 'react';
import axios from 'axios';

class Booking extends React.Component {
  /*const [hotel, sethotel] = useState('');
  const [address, setaddress] = useState('');
  const [location, setlocation] = useState('');
  const [price, setprice] = useState('');
  const [contact, setcontact] = useState('');
  const [rooms, setrooms] = useState('');
  const [img, setfile] = useState(null);*/

  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  handlefile = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  submit = () => {
    var name = document.getElementById('hotel').value;
    var address = document.getElementById('address').value;
    var location = document.getElementById('location').value;
    var price = document.getElementById('price').value;
    var contact = document.getElementById('contact').value;
    var rooms = document.getElementById('rooms').value;

    const fd = new FormData();
    fd.append('avatar', this.state.file);
    fd.append('hotel', name);
    fd.append('address', address);
    fd.append('location', location);
    fd.append('price', price);
    fd.append('contact', contact);
    fd.append('rooms', rooms);
    axios.post('http://localhost:5000/hotel', fd).then((response) => {
      alert('you have successfully registered hotel!!!!!');
      console.log(response);
    },(err)=>{
      alert('you can left any field empty!!!!!!!!!!!!!')
    });
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <div class='hr-body'>
          <div>
            <div class='main'>
              <header>Register your Hotel</header>
              <form class='form-box'>
                <label htmlfor='HotelName'>Name of Hotel</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='hotel'
                    id='hotel'
                    className='inp'
                    placeholder='Name of Hotel'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Address'>Address</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    className='inp'
                    placeholder='Complete Address of Hotel'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Location'>Location</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='location'
                    id='location'
                    className='inp'
                    placeholder='Location'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Price'>Price</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='price'
                    id='price'
                    className='inp'
                    placeholder='Price'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Contact'>Contact</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='contact'
                    id='contact'
                    className='inp'
                    placeholder='Contact No.'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Rooms'>Rooms</label>
                <div class='inp-row'>
                  <input
                    type='text'
                    name='rooms'
                    id='rooms'
                    className='inp'
                    placeholder='No. of Rooms available'
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>

                <label htmlfor='Image'>Upload Images</label>
                <div class='inp-row'>
                  <input
                    type='file'
                    alt='image'
                    name='file'
                    className='inp'
                    placeholder='Uplaod Images '
                    onChange={this.handlefile}
                    required
                  ></input>
                </div>

                <input
                  type='button'
                  class='sub-btn'
                  value='Register'
                  onClick={this.submit}
                ></input>
              </form>
            </div>
          </div>
        </div>

        <footer class='section teal darken-2 white-text center'>
          <p class='flow-text'>HotelBooker &copy; 2020</p>
        </footer>
      </Fragment>
    );
  }
}
export default Booking;
