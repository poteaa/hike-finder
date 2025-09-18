import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { AppContext } from '../AppLayout/AppLayout'
import Hamburger from '../Hamburger/Hamburger'

import './Header.css'

// eslint-disable-next-line react/prop-types
export default function Header({ onLoginClick }) {
    const { isLoggedIn } = useContext(AppContext)
    return (
        <header className="header container">
            <Link to="/" className='header__link'>
                <img src="/src/assets/hike-finder-logo.svg" className='header__icon'/>
            </Link>
            <nav className="header__main-nav">
                <ul className="header__menu-list">
                    <li>
                        <NavLink to="/" className="header__menu-link">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="header__menu-link">EXPLORE</NavLink>
                    </li>
                    <li>
                        <button className="header__menu-link link-btn">SIGN UP</button>
                    </li>
                    <li>
                        <button className="header__menu-link link-btn" onClick={onLoginClick}>{isLoggedIn ? 'LOG OUT' : 'LOG IN'}</button>
                    </li>
                </ul>
            </nav>
            <Hamburger onLoginClick={onLoginClick} />
        </header>  
    )
}