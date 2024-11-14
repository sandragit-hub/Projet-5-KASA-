import { useState } from "react";
import arrow from "../../assets/image/arrow.png"

export function CollapseDescription({ description }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropDownDivInfo">
            <div className="dropDownBannerDescription" onClick={() => setOpen(!open)}>
                <h3 className="collapseTitle">Description</h3>
                <button className={`arrowDropdown ${open ? 'open' : ''}`}>
                    <img className='arrow' src={arrow} alt="flèche pour ouvrir la description" />
                </button>
            </div>
            {open && <div className="descriptionDropdown">{description}</div>}
        </div>
    );
};