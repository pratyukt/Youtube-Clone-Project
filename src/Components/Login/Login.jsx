import React, { useState } from 'react'
import './Login.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'


const Login = () => {

  const [action,setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (action === "Sign Up" && !name) {
      setError("Name is required for Sign Up");
      return;
    }
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    // Perform authentication logic here
    console.log({ name, email, password });
  };

  return (
    <div className='container'>
     <div className='background Image'></div>
     <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
    </div>
    <div className='inputs'>
   
     <div className='input'>
      <img src={user_icon} alt=""/>
      <input type="text" placeholder='Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
/>
     </div>
     <div className='input'>
      <img src={email_icon} alt=""/>
      <input type="email" placeholder='Email-Id'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
     </div>
     <div className='input'>
      <img src={password_icon} alt=""/>
      <input type="password" placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
     </div>
    </div>
    {error && <div className='error'>{error}</div>}
    <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
    <div className='submit-container'>
    <div
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
        className={`submit ${action === "Sign Up" ? "gray" : ""}`}
        onClick={() => setAction("Login")}
      >
        Login
      </div>
      <div className='submit' onClick={handleSubmit}>
        {action}
      </div>
    </div>
  </div>
);
}

export default Login;