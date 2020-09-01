import React from 'react';
import Card from './card'


const Listings = ({listings}) => {
    const getListings = () => {
        let lisitingsOnPage = [];
        let result = [];

        listings.map(listing  => {
            return lisitingsOnPage.push(
                <Card
                    title={listings.title}
                    address={listings.address}
                    city={listings.city}
                    state={listings.state}
                    price={listing}

                />
            )
        })
    };
    return (
        <div>
            {getListings}
        </div>
    )
}

export default Listings;