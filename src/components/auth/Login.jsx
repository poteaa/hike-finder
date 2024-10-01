import { useContext, useState } from 'react';
import './Login.css';
import { login } from '../../services/api';
import { AppContext } from '../layout/Layout';

const Login = ({onClose}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const { setIsLoggedIn } = useContext(AppContext)

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoginError(false)
    try {
      await login(username, password)
      setIsLoggedIn(true)
      onClose()
    } catch (error) {
      setLoginError(true)
    }
  };

  return (
    <div className="login">
      <button onClick={onClose} className='login__close'>X</button>
      <h2 className='login__title'>LOG IN</h2>
      <form onSubmit={handleLogin} className='login__form'>
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
      {loginError && <p className='login__error'>Invalid username or password</p>}
    </div>
  );
};

export default Login;