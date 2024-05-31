import Nav from '../Navbar/Navbar'
import './sidebar.scss'

function Sidebar() {
    return (
       <aside className='sidebar'>
        <Nav.VerticalNav/>
        <footer className='sidebar_footer'>
                <p>Copiryght, SportSee 2020</p>
            </footer>
       </aside>
    )
}

export default Sidebar