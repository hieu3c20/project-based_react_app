import { React, useState, useCookies } from 'react'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['token']); // Access the 'token' cookie

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform dummy login verification
    if (email === 'dummy@example.com' && password === 'password') {
      const token = 'dummy_token'; // Dummy token

      // Store the token on the 'token' cookie
      setCookie('token', token, { path: '/' });

      // Redirect or perform other actions after successful login
    } else {
      // Handle login error or display error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn