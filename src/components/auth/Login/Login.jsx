import { useContext, useState } from 'react';
import './Login.css';
import { login } from '../../../services/api';
import { AppContext } from '../../layout/AppLayout/AppLayout';
import { ERROR_MESSAGES } from '../../../constants';

const Login = ({onClose, onSwitchToSignup}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setIsLoggedIn } = useContext(AppContext)

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoginError(false)
    setIsLoading(true)
    
    try {
      await login(username, password)
      setIsLoggedIn(true)
      onClose()
    } catch (error) {
      setLoginError(true)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="login">
      <button onClick={onClose} className='login__close' aria-label="Close login form">
        ×
      </button>
      <h2 className='login__title'>Welcome Back</h2>
      <form onSubmit={handleLogin} className='login__form'>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login__input'
          placeholder="Enter your username"
          required
          disabled={isLoading}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login__input'
          placeholder="Enter your password"
          required
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className='login__btn'
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      {loginError && <p className='login__error'>{ERROR_MESSAGES.LOGIN_FAILED}</p>}
      <div className='login__link'>
        Don&apos;t have an account? <button onClick={onSwitchToSignup} className="login__link-btn">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
