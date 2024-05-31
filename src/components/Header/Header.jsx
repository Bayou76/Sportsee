import Nav from '../Navbar/Navbar'
import Logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="app Coaching Sportif, SportSee" />
            </h1>
            <Nav.HorizontalNav />
        </header>
    )
}

export default Header