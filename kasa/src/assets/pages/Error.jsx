import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error404">
            <h1 className="titleError">404</h1>
            <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/Home" className="linkNav linkMenu" >Retourner sur la page d'accueil</Link>
        </div>
    );
}
