import '../../layout/Footer/Footer.scss'
import logo from "../../assets/image/logoFooter.png"

export default function Footer() {
    return (
        <footer className="footerContainer">
            <img src={logo} alt='logo Kasa' />
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

