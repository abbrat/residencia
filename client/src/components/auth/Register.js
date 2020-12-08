import React, { Component, Fragment, useContext, useState } from 'react';
import axios from 'axios';
import AlertContext from '../../context/alert/alertContext';

export const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'uname') {
      setUname(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    if (uname == '' || email == '' || password == '') {
      alert('fill all the required details!!')
    } else {
      const logindata = {
        name: uname,
        email: email,
        password: password
      };

      axios
        .post('http://localhost:5000/user/register', logindata)
        .then((response) => {
          alert(response.data.message);
        },(err)=>{
          alert('please enter data correctly!!!!!!!!!!!!!')
        });
      props.history.push('/login');
    }
  };

  return (
    <Fragment>
      <section class='section-signup iris transparent z-depth-5'>
        <div class='container regiss'>
          <div class='row'>
            <div class='col s12 m6'>
              <h4>Make Account for free</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae animi numquam quibusdam delectus corrupti fugiat
                placeat consequatur accusantium dicta quo.
              </p>
              <h4>Get best deals!!</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae animi numquam quibusdam delectus corrupti fugiat
                placeat consequatur accusantium dicta quo.
              </p>
              <h4>Make memories with your loved ones</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae animi numquam quibusdam delectus corrupti fugiat
                placeat consequatur accusantium dicta quo.
              </p>
            </div>
            <div class='col s12 m6'>
              <div class='card-panel  grey lighten-4 grey-text text-darken-4 z-depth-0'>
                <form>
                  <div class='input-field'>
                    <input
                      type='text'
                      placeholder='Username'
                      name='uname'
                      onChange={handleChange}
                    />
                    <label for='f_name'>User Name</label>
                  </div>

                  <div class='input-field'>
                    <input
                      type='text'
                      placeholder='email'
                      name='email'
                      onChange={handleChange}
                    />
                    <label for='email'>Email</label>
                  </div>
                  <div class='input-field'>
                    <input
                      type='password'
                      placeholder='password'
                      name='password'
                      onChange={handleChange}
                    />
                    <label for='password'>Password</label>
                  </div>
                  <button class='btn teal' onClick={submit}>
                    submit{' '}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class='section teal darken-2 white-text center'>
        <p class='flow-text'>HotelBooker &copy; 2020</p>
      </footer>
    </Fragment>
  );
};
export default Register;
// export default class Register extends Component {

//   constructor() {
//     super();
//     this.state = {
//       uname: null,
//       email: null,
//       password: null
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   submit = () => {
//     if (
//       this.state.uame == '' ||
//       this.state.email == '' ||
//       this.state.password == ''
//     ) {
//       setAlert('fill all the fields', 'danger');
//     }
//     const logindata = {
//       name: this.state.uname,
//       email: this.state.email,
//       password: this.state.password
//     };

//     axios
//       .post('http://localhost:5000/user/register', logindata)
//       .then((response) => {
//         alert(response.data.message);
//       });
//   };
//   render() {
//     return (
//       <Fragment>
//         <section class='section-signup iris transparent z-depth-5'>
//           <div class='container regiss'>
//             <div class='row'>
//               <div class='col s12 m6'>
//                 <h4>Make Account for free</h4>
//                 <p>
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Molestiae animi numquam quibusdam delectus corrupti fugiat
//                   placeat consequatur accusantium dicta quo.
//                 </p>
//                 <h4>Get best deals!!</h4>
//                 <p>
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Molestiae animi numquam quibusdam delectus corrupti fugiat
//                   placeat consequatur accusantium dicta quo.
//                 </p>
//                 <h4>Make memories with your loved ones</h4>
//                 <p>
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Molestiae animi numquam quibusdam delectus corrupti fugiat
//                   placeat consequatur accusantium dicta quo.
//                 </p>
//               </div>
//               <div class='col s12 m6'>
//                 <div class='card-panel  grey lighten-4 grey-text text-darken-4 z-depth-0'>
//                   <form>
//                     <div class='input-field'>
//                       <input
//                         type='text'
//                         placeholder='Username'
//                         name='uname'
//                         onChange={this.handleChange}
//                       />
//                       <label for='f_name'>User Name</label>
//                     </div>

//                     <div class='input-field'>
//                       <input
//                         type='text'
//                         placeholder='email'
//                         name='email'
//                         onChange={this.handleChange}
//                       />
//                       <label for='email'>Email</label>
//                     </div>
//                     <div class='input-field'>
//                       <input
//                         type='password'
//                         placeholder='password'
//                         name='password'
//                         onChange={this.handleChange}
//                       />
//                       <label for='password'>Password</label>
//                     </div>
//                     <button class='btn teal' onClick={this.submit}>
//                       submit{' '}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <footer class='section teal darken-2 white-text center'>
//           <p class='flow-text'>HotelBooker &copy; 2020</p>
//         </footer>
//       </Fragment>
//     );
//   }
// }
/*

<form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
*/