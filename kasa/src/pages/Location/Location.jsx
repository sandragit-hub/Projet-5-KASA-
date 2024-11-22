import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";
import { Collapse } from "../../components/Collapse/Collapse";
import '../../pages/Location/Location.scss'
import Rating from "../../components/Rating/rating";

export default function Location() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: logements, isLoading, isError } = useFetch("/logements.json");


    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des données.</p>;

    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        navigate("/Error")
    }
    const name = logement.host.name.split(' ');
    const rating = logement.rating;

    if (!logement) return <p>Logement non trouvé.</p>;

    return (
        <div className="allInfo">
            <Carousel pictures={logement.pictures} />
            <div className="firstInfo">
                <div className="habitation">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="moreInfo">
                    <div className="infoPerson">
                        <div className="hostName">
                            <span>{name[0]}</span>
                            <span>{name[1]}</span>
                        </div>
                        <img src={logement.host.picture} alt='portrait de la personne' />
                    </div>
                    <div className="classRating">
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className="collapseContent">
                <Collapse title="Description">
                    {logement.description}
                </Collapse>
                <Collapse title="Équipements">
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </Collapse>
            </div>
        </div>
    );
}
