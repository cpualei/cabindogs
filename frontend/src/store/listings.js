import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_LISTINGS = 'cabins/LOAD_LISTINGS';
export const UPDATE_LISTING = 'cabins/UPDATE_LISTING';
export const ADD_LISTING = 'cabins/ADD_LISTING';
export const REMOVE_LISTING = 'cabins/REMOVE_LISTING';

// ACTION CREATORS
const load = (listings) => {
    return {
        type: LOAD_LISTINGS,
        listings
    };
};

// const update = (listing) => {
//     return {
//         type: UPDATE_LISTING,
//         listing
//     };
// };

// const add = (listing) => {
//     return {
//         type: ADD_LISTING,
//         listingId
//     };
// };

// const remove = (listingId, userId) => {
//     return {
//         type: REMOVE_LISTING,
//         listingId
//     };
// };

// THUNK ACTION CREATORS
export const getListings = () => async (dispatch) => {
    const res = await csrfFetch(`/api/listings`);

    if (res.ok) {
        const listings = await res.json();
        console.log('listings', listings)
        dispatch(load(listings));
    };
};

// REDUCER
const listingsReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_LISTINGS:
            const normalizedListings = {};
            action.listings.forEach(listing => {
                normalizedListings[listing.id] = listing;
            })
            return {
                ...normalizedListings,
                ...state,
            }
    default:
        return state;
    };
};

export default listingsReducer;
