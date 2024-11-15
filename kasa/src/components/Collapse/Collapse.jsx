import { useState } from "react";
import arrow from "../../assets/image/arrow.png"
import '../../components/Collapse/Collapse.scss'

export function Collapse({ title, détails }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropDownDiv">
            <div className="dropDownBanner" onClick={() => setOpen(!open)}>
                <h3 className="collapseTitle">{title}</h3>
                <button className={`arrowDropdown ${open ? 'open' : ''}`}>
                    <img className='arrow' src={arrow} alt="flèche pour ouvrir la description" />
                </button>
            </div>
            {open && <div className="descriptionDropdown">{détails}</div>}
        </div>
    );
};