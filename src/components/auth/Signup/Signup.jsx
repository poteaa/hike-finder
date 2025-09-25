import { useState } from 'react';
import './Signup.css';

// eslint-disable-next-line react/prop-types
const Signup = ({onClose, onSwitchToLogin}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically call your signup API
      console.log('Signup data:', formData)
      
      // Close modal or redirect
      onClose()
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="signup">
      <button onClick={onClose} className='signup__close' aria-label="Close signup form">
        ×
      </button>
      <h2 className='signup__title'>Join Hike Finder</h2>
      <p className='signup__subtitle'>Create your account to save hikes and share adventures</p>
      
      <form onSubmit={handleSubmit} className='signup__form'>
        <div className='signup__field'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`signup__input ${errors.username ? 'signup__input--error' : ''}`}
            placeholder="Choose a username"
            required
            disabled={isLoading}
          />
          {errors.username && <span className='signup__error'>{errors.username}</span>}
        </div>

        <div className='signup__field'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`signup__input ${errors.email ? 'signup__input--error' : ''}`}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
          {errors.email && <span className='signup__error'>{errors.email}</span>}
        </div>

        <div className='signup__field'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`signup__input ${errors.password ? 'signup__input--error' : ''}`}
            placeholder="Create a password"
            required
            disabled={isLoading}
          />
          {errors.password && <span className='signup__error'>{errors.password}</span>}
        </div>

        <div className='signup__field'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`signup__input ${errors.confirmPassword ? 'signup__input--error' : ''}`}
            placeholder="Confirm your password"
            required
            disabled={isLoading}
          />
          {errors.confirmPassword && <span className='signup__error'>{errors.confirmPassword}</span>}
        </div>

        <button 
          type="submit" 
          className='signup__btn'
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>
      
      <div className='signup__link'>
        Already have an account? <button onClick={onSwitchToLogin} className="signup__link-btn">Sign in</button>
      </div>
    </div>
  );
};

export default Signup;