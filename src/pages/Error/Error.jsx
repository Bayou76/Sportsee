import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { Link } from 'react-router-dom'
import "./error.scss"

function Error(){
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className="error">
				<div className="error_info">
					<h1 className="error_info_title">404</h1>
					<p className="error_info_content">
						Oup! La page que vous demandez n'existe pas.
					</p>
				</div>
				<Link className="error_info_return" to="/">
					Retourner sur la page d'accueil
				</Link>
			</div>
        </div>
    )
}

export default Error