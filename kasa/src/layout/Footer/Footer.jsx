import '../../layout/Footer/Footer.scss'
import logo from "../../assets/image/logoFooter.png"

function Footer() {
    return (
        <footer className="footerContainer">
            <img src={logo} alt='logo Kasa' />
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer