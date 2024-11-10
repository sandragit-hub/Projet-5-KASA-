import { Link } from "react-router-dom"

export function Card({ id, title, cover }) {
    return (
        <Link to="/Habitation" className="linkNav linkMenu">
            <article key={id} className="card">
                <img src={cover} alt="" />
                <h3>{title}</h3>
            </article>
        </Link>
    )
}