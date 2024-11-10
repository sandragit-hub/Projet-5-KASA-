import { useParams } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";
import Carousel from "../components/carousel/Carousel";
import { CollapseDescription } from "../components/Collapse/collapseDescription";
import { CollapseEquipement } from "../components/Collapse/collapseEquipement";

export default function Habitation() {

    const { id } = useParams();

    const { data: logements, isLoading, isError } = useFetch("/logements.json");


    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des données.</p>;

    const logement = logements.find((logement) => logement.id === id);

    if (!logement) return <p>Logement non trouvé.</p>;

    return (
        <div className="habitation">
            <Carousel pictures={logement.pictures} />
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <div className="tags">
                {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="infoPerson">

            </div>
            <div className="infoLogement">
                <CollapseDescription description={logement.description} />
                <CollapseEquipement equipments=
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                />
            </div>
        </div>
    );
}
