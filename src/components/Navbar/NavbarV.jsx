import { Link } from 'react-router-dom'
import LogoYoga from '../../assets/yoga.png'
import LogoSwin from '../../assets/swin.png'
import LogoCycle from '../../assets/cycle.png'
import LogoDumbbell from '../../assets/dumbbell.png'
import './navbar.scss'

function VerticalNav() {
    return (
            <nav className='sidebar_nav'>
                <ul className='sidebar_nav_list'>
                    <li>
                        <Link to='/'>
                            <img src={LogoYoga} alt="Yoga" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoSwin} alt="Natation" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoCycle} alt="Cyclisme" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={LogoDumbbell} alt="Musculation" />
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}



export default VerticalNav