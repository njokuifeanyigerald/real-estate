import React from 'react';
import Card from './card'


const Listings = ({listings}) => {
    const getListings = () => {
        let lisitingsOnPage = [];
        let result = [];

        listings.map(listing  => {
            return lisitingsOnPage.push(
                <Card 
                    key={listing.id}
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                    

                />
            )
        });

        for (let i = 0 ; i < listings.length;i += 3 ){
            result.push(
                <div className="row">
                    <div className="col-1-of-3">
                        {lisitingsOnPage[i]}
                    </div>
                    <div className="col-1-of-3">
                        {lisitingsOnPage[i+1] ? lisitingsOnPage[i+1]: null}
                    </div>
                    <div className="col-1-of-3">
                        {lisitingsOnPage[i+2] ? lisitingsOnPage[i+2]: null}
                    </div>
                </div>
            )
        }
        return result;

    };
    return (
        <div>
           {getListings()}
        </div>
    );
}

export default Listings;