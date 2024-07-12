import { Link } from 'react-router-dom'
import './navbar.scss'

function HorizontalNav() {
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className='nav_list_item'>
                    <Link  to='/SportSee'>
                        Accueil
                    </Link>
                </li>
                <li className='nav_list_item'>
                    <Link  to='/profile'>
                       Profil
                    </Link>
                </li>
                <li className='nav_list_item'>
                    <Link  to='/setting'>
                       Réglage
                    </Link>
                </li>
                <li className='nav_list_item'>
                    <Link  to='/community'>
                       Communauté
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default HorizontalNav