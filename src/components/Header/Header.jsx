import { NavLink } from 'react-router-dom';

import AppLogoDark from '../../assets/logo-white.svg'
import Button from '../Button/Button';
import './Header.css'

function Header() {
    return (
        <header className='app-header'>
            <img
                src={AppLogoDark}
                alt="PoetPiece Amazing Logo"
                className='app-logo'
            />
            <nav className='app-navbar'>
                <Button className="nav-menu hidden padding-1 rounded transparent border"><i className='fa fa-bars fa-2xl'></i></Button>
                <ul>
                    <li className='nav-item'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/explore">Explore</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/write">Write</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;