export function Banner({ image, text, showShadow }) {
    return (
        <div className='Banner'>
            <img src={image} alt='moutain' />
            {showShadow && <div className="filterShadow"></div>}
            <h2 className='bannerText'> {text} </h2>
        </div>

    )
};