import { Link } from "react-router-dom"
import '../../components/card/card.scss'
import PropTypes from 'prop-types';

export function Card({ id, title, cover }) {
    return (
        <Link to={`/location/${id}`} className="linkNav linkMenu">
            <article key={id} className="card">
                <img src={cover} alt="photo des logements" />
                <h3>{title}</h3>
            </article>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}