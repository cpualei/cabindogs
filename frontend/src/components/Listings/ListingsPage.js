import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListings } from '../../store/listings';

const Listings = () => {

    const listings = useSelector(state => {
        return Object.values(state.listings);
    });

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
                        <div>{listing.name}</div>
                        <div>{listing.state}</div>
                        <div>{listing.country}</div>
                        <div>${listing.cost} / night</div>
                    </i>
                ))}
            </ul>
        </div>
    );
};

export default Listings;
