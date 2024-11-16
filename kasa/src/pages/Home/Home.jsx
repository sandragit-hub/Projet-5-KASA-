import { Banner } from "../../components/banner/Banner";
import { Card } from "../../components/card/Card";
import banner from "../../assets/image/banner.png";
import { useFetch } from "../../utils/hooks/useFetch";
import "../../pages/Home/Home.scss";

export default function Home() {
    const { data: logements, isLoading, isError } = useFetch("/logements.json");

    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des données.</p>;

    return (
        <main>
            <Banner image={banner} text="Chez vous, partout et ailleurs" showShadow={true} />
            <div className="divCard">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </main>
    );
}
