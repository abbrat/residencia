import React, { Fragment, useContext } from 'react';
import HotelItems from './HotelItems';
import AuthContext from '../../context/auth/authContext';
import { useEffect } from 'react';
import axios from 'axios';
export const Hotels = ({ match }) => {
  const authContext = useContext(AuthContext);
  const { getHotels, hotels } = authContext;
  // var location=match.params.l
  const handleChange = (hot) => {
    getHotels(hot);
    // setInput(hot);
  };

  useEffect(() => {
    const place = match.params.location;

    axios.get('http://localhost:5000/hotel/' + place).then((response) => {
      // console.log(response);
      handleChange(response.data);
    });
  }, []);
  return (
    <Fragment>
      <div className='container'>
        <h1 class='teal-text'> Hotels:</h1>
        <div class='row'>
          {hotels.map((hotel) => (
            <HotelItems key={hotel._id}
              name={hotel.hotelName}
              location={hotel.Address}
              price={hotel.price}
              contact={hotel.contact}
              img_url={hotel.img_url}
            />
          ))}
        </div>
      </div>
    </Fragment>
    //  {/* <h1>You selected {match.params.location}</h1> */}
  );
};
export default Hotels;
