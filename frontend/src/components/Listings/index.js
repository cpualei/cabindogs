import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListings } from '../../store/listings';

const Listings = () => {

    const listings = useSelector(state => {
        return Object.values(state.listings);
    });
    console.log(listings)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListings())
    }, [dispatch]);

    return (
        <div>
            <ul>
                {listings.map((listing) => (
                    <i key={listing.id}>
                        <img src={listing.img1}></img>
                    </i>
                ))}
            </ul>
        </div>
    );
};

export default Listings;
