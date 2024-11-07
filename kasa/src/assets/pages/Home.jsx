import { Banner } from "../../components/banner/Banner";
import { Card } from "../../components/card/card";


export default function Home() {
    return (
        <div>
            <Banner />
            <div className="divCard">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}