import { useState } from "react";
import arrow from "../../assets/image/arrow.png"
import PropTypes from 'prop-types';

export function CollapseDescription({ description }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropDownDivInfo">
            <div className="dropDownBanner" onClick={() => setOpen(!open)}>
                <h3 className="collapseTitle">Description</h3>
                <button className={`arrowDropdown ${open ? 'open' : ''}`}>
                    <img className='arrow' src={arrow} alt="flèche pour ouvrir la description" />
                </button>
            </div>
            <div className={`descriptionDropdown ${open ? 'open' : ''}`}>
                {description} </div>
        </div>
    );
};

CollapseDescription.propTypes = {
    description: PropTypes.string,
}