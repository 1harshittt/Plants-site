import React from 'react'
import './Account.scss'
import { Link } from 'react-router-dom'
const Account = () => {
  return (
    <div className='account'>
      <div className="login-card">
  <div className="card-header">
    <div className="log">Login</div>
  </div>
  
    <div className="form-group">
      <label for="username">Username:</label>
      <input required="" name="username" id="username" type="text"/>
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input required="" name="password" id="password" type="password"/>
    </div>
    <h4>Forgot Password?</h4>
    <div className="form-group">
      <input value="Sign In" type="submit"/>
    </div>

    <hr/>
    <p>Or</p>

     <div className="register">
      <Link to="/register"><input value="Register" type="submit" /></Link>
    </div>
  
</div>
    </div>
  )
}

export default Account
