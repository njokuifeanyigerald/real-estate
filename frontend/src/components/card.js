import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'




const Card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div>
            <div className="card">
                
                <h3 className="card__title">{props.title}</h3>
                <div className='card__header'>
                    <img className='card__header__photo' src={props.photo_main} alt='House' />
                </div>
                <p className='card__location'>{props.address}, {props.city}, {props.state}</p>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <p className='card__info'>Price: N{numberWithCommas(props.price)}</p>
                        <p className='card__info'>Bedrooms: {props.bedrooms}</p>
                        <p className='card__info'>Bathrooms: {Math.floor(props.bathrooms)}</p>
                    </div>
                    <div className='col-1-of-2'>
                        <p className='card__saletype '>{props.sale_type}</p>
                        <p className='card__hometype'>{props.home_type}</p>
                        <p className='card__sqft'>Sqft: {props.sqft}</p>
                    </div>
                </div>
                <Link className='card__link btn' to={`/listing/${props.slug}`}>View Listing</Link>
               
            </div> 
            
        </div>
        
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.string.isRequired,
    sale_type: PropTypes.string.isRequired,
    home_type: PropTypes.string.isRequired,
    sqft: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default Card;