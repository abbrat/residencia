import React, { Fragment, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { login, isAuthenticated } = authContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLog] = useState('no');
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const submit = () => {
    if (email === '' || password === '') {
      alert('You are expected to fill all the details of the form!!')
    } else {
      const logindata = {
        email: email,
        password: password
      };
      axios
        .post('http://localhost:5000/user/login', logindata)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          console.log(response.data.token);
          login(email);
          setLog('yes');
        },(err)=>{
          alert('please enter data correctly!!!!!!!!!!!!!')
        });
      }
    //const tz = localStorage.getItem('token');

    // props.history.push('/');
  };
  useEffect(() => {
    if (loggedIn === 'yes') {
      props.history.push('/');
    }
  });
  return (
    <Fragment>
      <div className='row loginbody'>
        <div className='login col s12 l4 offset-l4'>
          <div className='card'>
            <div className='card-action teal white-text'>
              <h3>Login to your Account</h3>
            </div>
            <div className='card-content'>
              <div className='form-field'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  placeholder='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className='form-field'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  value={password}
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                />
              </div>
              <div className='form-field'>
                <button class='btn teal ' onClick={submit}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class='section teal darken-2 white-text center'>
        <p class='flow-text'>HotelBooker &copy; 2020</p>
      </footer>
    </Fragment>
  );
};
export default Login;

// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// import { Link, Redirect } from 'react-router-dom';

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = { email: null, password: null };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   submit = () => {
//     const logindata = {
//       email: this.state.email,
//       password: this.state.password
//     };
//     axios
//       .post('http://localhost:5000/user/login', logindata)
//       .then((response) => {
//         localStorage.setItem('token', response.data.token);
//         alert('user valid (logged in)');
//         console.log(response.status);
//       });
//   };
//   render() {
//     return (
//       <Fragment>
//         <div className='row loginbody'>
//           <div className='login col s12 l4 offset-l4'>
//             <div className='card'>
//               <div className='card-action teal white-text'>
//                 <h3>Login to your Account</h3>
//               </div>
//               <div className='card-content'>
//                 <div className='form-field'>
//                   <label htmlFor='email'>Email</label>
//                   <input
//                     type='text'
//                     placeholder='email'
//                     name='email'
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <div className='form-field'>
//                   <label htmlFor='password'>Password</label>
//                   <input
//                     type='password'
//                     placeholder='password'
//                     name='password'
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 <div className='form-field'>
//                   <button class='btn teal ' onClick={this.submit}>
//                     submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer class='section teal darken-2 white-text center'>
//           <p class='flow-text'>HotelBooker &copy; 2020</p>
//         </footer>
//       </Fragment>
//       //  <div>
//       //    <input type="text"  placeholder="email" name="email" onChange={this.handleChange}/>
//       //    <input type="password" placeholder="password"  name="password" onChange={this.handleChange}/>
//       //    <button onClick={this.submit}  >submit </button>
//       //  </div>
//     );
//   }
// }
