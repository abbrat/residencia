import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Booking from './components/booking/Booking';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Hotels from './components/booking/Hotels';
import Alerts from './components/layout/Alert';
import HotelRegister from './components/hotelregister/HotelRegister';
function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div class='containerz'>
              <Alerts />
            </div>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/registerhotel' component={HotelRegister} />
              <Route exact path='/booking' component={Booking} />
              <Route exact path='/booking/:location' component={Hotels} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
