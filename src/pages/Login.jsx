import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission here
  };

  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        
        <p>
        <input type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/><i class="validation"><span></span><span></span></i>
        </p>
        <p>
        <input type="text" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/><i class="validation"><span></span><span></span></i>
        </p>
        <p>
        <input type="submit" id="login" value="Login"/>
        </p>
      </form>
      <div id="create-account-wrap">
        <p>Not a member? <a href="#">Create Account</a></p>
        
      </div>
    </div>
  )
}
export default Login;

