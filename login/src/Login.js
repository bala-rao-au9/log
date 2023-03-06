import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  }, []);

  async function Login() {
    let item = { email, password };
    let result = await fetch('http://75.101.248.217:8000/Recruit/login/doAnyLogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(item),
    });

    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
    navigate('/dashboard');
  }

  return (
    
    <>
    
      <div>
        <p className="Title"></p>
        <div className="App">
          <div class="login-box">
            <div class="login-logo"></div>
            <div class="card">
              <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form>
                  <div class="input-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <div class="icheck-primary">
                        <input type="checkbox" id="remember"></input>
                        <label for="remember">Remember Me</label>
                      </div>
                    </div>
                    <div class="col-4">
                      <button
                        onClick={Login}
                        class="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
                <div class="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" class="btn btn-block btn-primary">
                    <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                  </a>
                  <a href="#" class="btn btn-block btn-danger">
                    <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                  </a>
                </div>
                <p class="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p class="mb-0">
                    <a href="register.html" class="text-center">Register a new membership</a>
                </p>
                </div>
                {/* <!-- /.login-card-body --> */}
            </div>
            </div>
            {/* <!-- /.login-box --> */}
        </div>
    </div>

    </>
)



    }



export default Login;











// import {  useNavigate, Link } from 'react-router-dom';
// import {Components} from 'react'
// import Cookies from 'js-cookie'


// import './index.css'

// export class Login extends Components  {
//   state = {
//     email: '',
//     password: '',
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onChangeemail = event => {
//     this.setState({email: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props

//     Cookies.set('jwt_token', jwtToken, {
//       expires: 30,
//       path: '/',
//     })
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {email, password} = this.state
//     const userDetails = {email, password}
//     const url = 'http://75.101.248.217:8000/Recruit/login/doAnyLogin'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-field"
//           value={password}
//           onChange={this.onChangePassword}
//           placeholder="Password"
//         />
//       </>
//     )
//   }

//   renderemailField = () => {
//     const {email} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="email">
//           Email
//         </label>
//         <input
//           type="text"
//           id="email"
//           className="email-input-field"
//           value={email}
//           onChange={this.onChangeemail}
//           placeholder="email"
//         />
//       </>
//     )
//   }

//   render() {
//     const {showSubmitError, errorMsg} = this.state
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken !== undefined) {
//       return <Navigate to="/dashboard" />
//     }
//     return (
//         <>
//         <p className="Title"></p>
//             <div className="App">
//                 <div class="login-box">
//                 <div class="login-logo">
//                     {/* <a href="../../index2.html"><b>Admin</b>LTE</a> */}
//                 </div>
//                 {/* <!-- /.login-logo --> */}
//                 <div class="card">
//                     <div class="card-body login-card-body">
//                     <p class="login-box-msg">Sign in to start your session</p>

//                     <form action="../../index3.html" method="post">
//                         <div class="input-group mb-3">
                            
//                         <input type="email" class="form-control" placeholder="Email"  onChange={this.onChangeemail}></input>
//                         <div class="input-group-append">
//                             <div class="input-group-text">
//                             <span class="fas fa-envelope"></span>
                            
//                         </div>
//                         </div>
//                         </div>
//                         <div class="input-group mb-3">
//                         <input type="password" class="form-control" placeholder="Password"  onChange={this.onChangepassword}></input>
//                         <div class="input-group-append">
//                             <div class="input-group-text">
//                             <span class="fas fa-lock"></span>
//                             </div>
//                         </div>
//                         </div>
//                         <div class="row">
//                         <div class="col-8">
//                             <div class="icheck-primary">
//                             <input type="checkbox" id="remember"></input>
//                             <label for="remember">
//                                 Remember Me
//                             </label>
//                             </div>
//                         </div>
//                         {/* <!-- /.col --> */}
//                         <div class="col-4">
//                             <button type="submit" class="btn btn-primary btn-block">Sign In</button>
//                         </div>
//                         {/* <!-- /.col --> */}
//                         </div>
//                     </form>

//                     <div class="social-auth-links text-center mb-3">
//                         <p>- OR -</p>
//                         <a href="#" class="btn btn-block btn-primary">
//                         <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
//                         </a>
//                         <a href="#" class="btn btn-block btn-danger">
//                         <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
//                         </a>
//                     </div>
//                     {/* <!-- /.social-auth-links --> */}

//                     <p class="mb-1">
//                         <a href="forgot-password.html">I forgot my password</a>
//                     </p>
//                     <p class="mb-0">
//                         <a href="register.html" class="text-center">Register a new membership</a>
//                     </p>
//                     </div>
//                     {/* <!-- /.login-card-body --> */}
//                 </div>
//                 </div>
//                 {/* <!-- /.login-box --> */}
//             </div>
//             </>

//     )
//   }
// }

// export default Login;




    


