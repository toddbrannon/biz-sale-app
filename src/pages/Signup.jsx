import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup form submission here
  };

  return (
    <div className='form-container'>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit}>
        <label className='form-input'>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label className='form-input'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label className='form-input'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit" className='form-submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
