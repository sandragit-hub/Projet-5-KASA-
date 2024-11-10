import { useState } from "react";
import arrow from "../../assets/image/arrow.png"

export function CollapseEquipement({ equipments }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropDownDiv">
            <div className="dropDownBannerEquipement" onClick={() => setOpen(!open)}>
                <h3 className="collapseTitle">Équipements</h3>
                <button className={`arrowDropdown ${open ? 'open' : ''}`}>
                    <img className='arrow' src={arrow} alt="flèche pour ouvrir la description" />
                </button>
            </div>
            {open && <div className="descriptionDropdown">{equipments}</div>}
        </div>
    );
};