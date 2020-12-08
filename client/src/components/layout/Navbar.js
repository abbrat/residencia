import React, { Fragment, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
export const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const guestlinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  const onLogout = () => {
    logout();
  };
  const authlinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/booking'>Booking</Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fa fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <div class='navbar-fixed'>
        <nav class='teal'>
          <div class='container'>
            <div class='nav-wrapper'>
              <i class='fas fa-hotel'></i>
              <a href='#home' class='brand-logo'>
              Residencia
              </a>
              <a href='#' data-activates='mobile-nav' class='button-collapse'>
                <i class='material-icons'>menu</i>
              </a>
              <ul class='right hide-on-med-and-down'>
                {isAuthenticated ? authlinks : guestlinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class='side-nav' id='mobile-nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Navbar;
