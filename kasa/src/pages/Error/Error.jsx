import { Link } from "react-router-dom"
import "../../pages/Error/Error.scss"

export default function Error() {
    return (
        <div className="error404">
            <h1 className="titleError">404</h1>
            <div className="info404">
                <span className="description404">Oups! La page que vous demandez n'existe pas.</span>
                <Link to="/" className="linkError" >Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
}
