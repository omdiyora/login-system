import React, { useState } from 'react'
import axios from 'axios'
// import './Login.css'
import './Sign.css'

import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [auth, setauth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4002/api/auth/login', {
        email,
        password,
      });
      setauth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
        userId: res.data._id
      })
      localStorage.setItem('auth', JSON.stringify(res.data))
      localStorage.setItem('userId', res.data.userId)

      if (res.data.user.role == 1) {
        navigate('/admin/dashboard')
      } else {
        navigate('/home')
        console.log("err");
      }
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      {/* <form >
        <label>Email</label> <br />
        <input type="text" placeholder='Enter E-email address' />
        <label>Password</label> <br />
        <input type="text" placeholder='Enter Password' />
        <br />
        <input type="submit" value='Login' />
      </form> */}


<div className='background'>

                <div className="container">
                    {/* upper button section to select
    the login or signup form */}
                    <div />
                    <div className="form-title">
                        <h1>Login </h1>
                    </div>
                    <div className="form-section">
                        <form onSubmit={handleSubmit}>

                        {/* login form */}
                        <div className="login-box">
                            <input type="email" className="email ele" placeholder="youremail@email.com" name='email' onChange={(e) => setemail(e.target.value)} />
                            <input type="password" className="password ele" placeholder="password" name='password' onChange={(e) => setpassword(e.target.value)} />
                            {/* <p>Dont Have A Account</p> */}
                            <button className="clkbtn">Login</button>
                        </div>
                        </form>
                        {/* signup form */}
                        {/* <div className="signup-box">
                        <input type="text" className="name ele" placeholder="Enter your name" />
                        <input type="email" className="email ele" placeholder="youremail@email.com" />
                        <input type="password" className="password ele" placeholder="password" />
                        <input type="password" className="password ele" placeholder="Confirm password" />
                        <button className="clkbtn">Signup</button>
                    </div> */}
                    </div>
                </div>
            </div>

      {/* <div className='body-background'>


      <div >
        <div classname="background">
          <div classname="shape">
            <div classname="shape">
            </div>
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <label htmlfor="username">Username</label>
              <input type="text" placeholder="Email or Phone" id="username" name='email' onChange={(e) => setemail(e.target.value)} /> 
              <label htmlfor="password">Password</label>
              <input type="password" placeholder="Password" id="password" name='password' onChange={(e) => setpassword(e.target.value)}  />
              <button>Log In</button>
            </form>
          </div>
        </div></div>
      </div> */}

    </>
  )
}

export default Login