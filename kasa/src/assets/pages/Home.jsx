import { Banner } from "../../components/banner/Banner";
import { Card } from "../../components/card/card";
import banner from "../../assets/image/banner.png"

export default function Home() {
    return (
        <div>
            <Banner image={banner} text="Chez vous, partout et ailleurs" showShadow={true} />
            <div className="divCard">
                <Card>

                </Card>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}