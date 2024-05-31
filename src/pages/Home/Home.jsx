import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import React from 'react';
import { NavLink } from "react-router-dom";
import "./home.scss"


function Home() {

    return (
        <div>
            <div>
                <Header />
                <Sidebar />
            </div>
            <main className="userChoose">
                <NavLink className="lien-accueil" to={"/profile/12"}>
                    <button className="btn-accueil">Profil n°12</button>
                </NavLink>
                <NavLink className="lien-accueil" to={"/profile/18"}>
                    <button className="btn-accueil">Profil n°18</button>
                </NavLink>
            </main>

        </div>
    )
}

export default Home