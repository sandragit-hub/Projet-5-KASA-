import greyStar from '../../assets/image/greyStar.png';
import redStar from '../../assets/image/redStar.png';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" className='star' />
                )
            })}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
}