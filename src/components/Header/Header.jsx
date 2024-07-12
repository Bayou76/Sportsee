import HorizontalNav from '../Navbar/NavbarH'
import Logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="app Coaching Sportif, SportSee" />
            </h1>
            <HorizontalNav />
        </header>
    )
}

export default Header