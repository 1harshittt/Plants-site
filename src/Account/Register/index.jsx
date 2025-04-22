import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register-container">
      <div className="login-card">
        <div className="card-header">
          <div className="log">Create Account</div>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              required 
              name="username" 
              id="username" 
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              required 
              name="email" 
              id="email" 
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              required 
              name="password" 
              id="password" 
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              required 
              name="confirmPassword" 
              id="confirmPassword" 
              type="password"
              placeholder="Confirm your password"
            />
          </div>
        
          <input type="submit" value="Create Account" />
        </form>

        <p>
          Already have an account? <Link to="/account">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
