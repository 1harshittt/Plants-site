import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div>
        <div className="login-card">
  <div className="card-header">
    <div className="log">Register</div>
  </div>
  
    <div className="form-group">
      <label for="username">Username:</label>
      <input required="" name="username" id="username" type="text"/>
    </div>
    <div className="form-group">
      <label for="password">Email:</label>
      <input required="" name="password" id="password" type="password"/>
    </div>
     <div className="form-group">
      <label for="password">Password:</label>
      <input required="" name="password" id="password" type="password"/>
    </div>
     <div className="form-group">
      <label for="password">Confirm Password:</label>
      <input required="" name="password" id="password" type="password"/>
    </div>
   
    <div className="form-group">
      <input value="Sign Up" type="submit"/>
    </div>
  
</div>
    </div>
  )
}

export default Register
