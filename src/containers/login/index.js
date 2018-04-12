import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../images/loginImg.png'

const Login = props => (
  <Link to="/login-page">
    <img src={loginImg} className="login-img" alt="Amazon Login" />
  </Link>
)

export default Login
