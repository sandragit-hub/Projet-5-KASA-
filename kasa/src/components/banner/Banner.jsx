import banner from "../../assets/image/banner.png"

export function Banner() {
    return (
        <div className='Banner'>
            <img src={banner} alt='moutain' />
            <div className="filterShadow"></div>
            <h2 className='bannerText'> Chez vous, partout et ailleurs  </h2>
        </div>

    )
};