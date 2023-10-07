import AppLogoDark from '../../assets/images/logos/logo-white.svg'
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
                <ul>
                    <li className='nav-item'><a href="">About</a></li>
                    <li className='nav-item'><a href="">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;