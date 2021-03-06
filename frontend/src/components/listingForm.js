import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';


const ListingForm = (props) => {
    const [formData, setFormData] = useState({
        sale_type: 'For Sale',
        price: 'N0+',
        bedrooms: '0+',
        home_type: 'House',
        bathrooms: '0+',
        sqft:'0+',
        days_listed: '1 or less',
        has_photos: '1+',
        state: 'Imo',
        keywords: ''

    });
    const {sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,state, keywords} = formData;
    const [loading, setLoading] = useState(false)

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        setLoading(true)
        axios.post('http://localhost:8000/api/listings/search',{sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,state,keywords }, config)
            .then(res =>{
                setLoading(false)
                props.setListings(res.data);
                window.scrollTo(0,0)
            })
            .catch(err => {
                setLoading(false)
                window.scrollTo(0,0)
            })

    }
    return(
        <form className='listingform text-capitalize' onSubmit={e => onSubmit(e)}>
            <div className='row'>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sale_type'>Sale Or Rent</label>
                        <select className='listingform__select' name='sale_type' onChange={e => onChange(e)} value={sale_type}>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sqft'>Sqft</label>
                        <select className='listingform__select' name='sqft' onChange={e => onChange(e)} value={sqft}>
                            <option>0+</option>
                            <option>1000+</option>
                            <option>1200+</option>
                            <option>1500+</option>
                            <option>2000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='price'>minimum price</label>
                        <select className='listingform__select' name='price' onChange={e => onChange(e)} value={price}>
                            <option>N0+</option>
                            <option>N200,000+</option>
                            <option>N400,000+</option>
                            <option>N600,000+</option>
                            <option>N800,000+</option>
                            <option>N1,000,000+</option>
                            <option>N1,200,000+</option>
                            <option>N1,500,000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='days_listed'>days listed</label>
                        <select className='listingform__select' name='days_listed' onChange={e => onChange(e)} value={days_listed}>
                            <option>1 or less  </option>
                            <option>2 or less</option>
                            <option>5 or less </option>
                            <option>10 or less</option>
                            <option>20 or less  </option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='bedrooms'>bedrooms</label>
                        <select className='listingform__select' name='bedrooms' onChange={e => onChange(e)} value={bedrooms}>
                            <option>0+ </option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+ </option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='has_photos'>has photos</label>
                        <select className='listingform__select' name='has_photos' onChange={e => onChange(e)} value={has_photos}>
                            <option>1+ </option>
                            <option>3+</option>
                            <option>5+</option>
                            <option>10+ </option>
                            <option>15+</option>
                        </select>
                    </div>
                </div>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='home_type'>Home Type</label>
                        <select className='listingform__select' name='home_type' onChange={e => onChange(e)} value={home_type}>
                            <option>House</option>
                            <option>Land</option>
                            <option>Condo</option>
                            <option>Town House</option>
                            <option>Lodge</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='state'>state</label>
                        <select className='listingform__select' name='state' onChange={e => onChange(e)} value={state}>
                            <option>Abia</option>
                            <option>Adamawa</option>
                            <option>Akwa Ibom</option>
                            <option>Anambra</option>
                            <option>Bauchi</option>
                            <option>Bayelsa</option>
                            <option>Benue</option>
                            <option>Borno</option>
                            <option>Cross River</option>
                            <option>Delta</option>
                            <option>Ebonyi</option>
                            <option>Edo</option>
                            <option>Ekiti</option>
                            <option>Enugu</option>
                            <option>Gombe</option>
                            <option>Imo</option>
                            <option>Jigawa</option>
                            <option>Kaduna</option>
                            <option>Kano</option>
                            <option>Katsina</option>
                            <option>Kebbi</option>
                            <option>Kogi</option>
                            <option>Kwara</option>
                            <option>Lagos</option>
                            <option>Nasarawa</option>
                            <option>Niger</option>
                            <option>Ogun</option>
                            <option>Ondo</option>
                            <option>Osun</option>
                            <option>Oyo</option>
                            <option>Plateau</option>
                            <option>Rivers</option>
                            <option>Sokoto</option>
                            <option>Taraba</option>
                            <option>Yobe</option>
                            <option>Zamfara</option>
                            <option>Federal Capital Territory</option>
                        </select>
                    </div>
                    
                </div>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='bathrooms'>Bathrooms</label>
                        <select className='listingform__select' name='bathrooms' onChange={e => onChange(e)} value={bathrooms}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='keywords'>Keywords</label>
                        <input className='listingform__input' name='keywords' type='text' onChange={e => onChange(e)} value={keywords} />
                    </div>
                </div>
                <div className="col-1-of-6" style={{marginTop:5}}>
                    { loading ? 
                        <div className='listingform__loader'>
                            <Loader 
                                type='Oval'
                                color='#424242'
                                height={50}
                                width={50}
                            />
                        </div>:
                        <button className="listingform__button listingform__button--primary">search</button>
                    
                    }
                </div>


            </div>
        </form>
    )
};
ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
}

export default ListingForm;