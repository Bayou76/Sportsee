import VerticalNav from '../Navbar/NavbarV'
import './sidebar.scss'

function Sidebar() {
    return (
       <aside className='sidebar'>
        <VerticalNav/>
        <footer className='sidebar_footer'>
                <p>Copiryght, SportSee 2020</p>
            </footer>
       </aside>
    )
}

export default Sidebar