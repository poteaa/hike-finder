import { useState } from 'react';
import './Login.css';

const Login = ({onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="login">
      <button onClick={onClose} className='login__close'>X</button>
      <h2 className='login__title'>LOG IN</h2>
      <form onSubmit={handleSubmit} className='login__form'>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login__input'
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login__input'
          required
        />
        <button type="submit" className='login__btn'>Login</button>
      </form>
    </div>
  );
};

export default Login;