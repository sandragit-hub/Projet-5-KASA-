import { Link } from "react-router-dom"
import logo from "../../assets/image/logo-kasa.png"


function Header() {
    return (
        <header>
            <img src={logo} alt='logo Kasa' />

            <nav>
                <Link to="/" className="linkNav linkMenu" >Accueil </Link>
                <Link to="/About" className="linkNav linkMenu"> À propos</Link>
            </nav>
        </header>
    )
}

export default Header