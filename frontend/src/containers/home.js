import React,{useState} from 'react';
import {Helmet} from 'react-helmet'
import ListingForm from '../components/listingForm'
import Listings from '../components/listings';
import Pagination from '../components/pagination'

const Home = () => {
    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);  // remember to change it to 9 even in the backend
    const [active, setActive] = useState(1)

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing =  indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing)

    const visitPage = (page) => {
        
            setCurrentPage(page)
            setActive(page)
        
    };

    const pervious_number = (page) => {
        if (currentListings !== 1){
            setCurrentPage(currentPage-1)
            setActive(currentPage-1)
        }
    };

    const next_number = (page) => {
        if (currentListings !== Math.ceil(listings.length/3)){
            setCurrentPage(currentPage+1)
            setActive(currentPage+1)
        }
    }

    return(
        <main className='home'>
            <Helmet>
                    <title>9jaProperty - Home</title>
                    <meta
                        name='description'
                        content='9jaProperty Home page'
                    />
            </Helmet>
            <section className='home__form'>
                <ListingForm setListings={setListings} />

            </section>
            <section className='home__listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home__pagination'>
                <div className='row'>
                    {listings.length !== 0? (
                        <Pagination 
                            itemspPerPage={listingsPerPage}
                            count={Listings.length}
                            visitPage={visitPage}
                            pervious={pervious_number}
                            next={next_number}
                            active={active}
                            setActive={setActive}
                        />

                    ): null
                }
                </div>
            </section>
        </main>
    )
}

export default Home;