import { useState, useId } from "react";
import { NavLink } from 'react-router-dom'

import './Hamburger.css'

// eslint-disable-next-line react/prop-types
export default function Hamburger({ onLoginClick }) {
    const [isOpen, setIsOpen] = useState(false)
    const menuId = useId()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="hamburger-menu">
            <button
                className="hamburger-menu__toggle"
                id="nav-toggle"
                onClick={toggleMenu}
                aria-label="toggle navigation"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={menuId}
            >
                <span className="hamburger-menu__icon"></span>
            </button>
            <nav
                className={`hamburger-menu__nav ${isOpen ? 'open' : ''}`}
                aria-label="Main menu"
                aria-hidden={!isOpen}
                id={menuId}
            >
                <ul className="hamburger-menu__list" onClick={toggleMenu}>
                    <li>
                        <NavLink to="/" className="hamburger-menu__link">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="hamburger-menu__link">EXPLORE</NavLink>
                    </li>
                    <li>
                        <button className="hamburger-menu__link hamburger-menu__btn">SIGN UP</button>
                    </li>
                    <li>
                        <button
                            className="hamburger-menu__link hamburger-menu__btn"
                            onClick={onLoginClick}
                        >
                            LOG IN
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}