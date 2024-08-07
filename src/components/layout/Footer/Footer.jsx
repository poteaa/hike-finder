import { NavLink } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer container">
            <nav className="footer__main-nav">
                <ul className="footer__menu-list">
                    <li>
                        <NavLink to="/" className="footer__menu-link">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="footer__menu-link">EXPLORE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="footer__menu-link">SIGN UP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="footer__menu-link">LOG IN</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <img src="/src/assets/logo-footer.svg" className="footer__logo" />
                <p className="footer__copyright">Copyright 2022. HikeFinder</p>
            </div>
        </footer>
    )
}