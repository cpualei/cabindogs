import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_LISTINGS = 'cabins/LOAD_LISTINGS';
export const ADD_LISTING = 'cabins/ADD_LISTING';
export const UPDATE_LISTING = 'cabins/UPDATE_LISTING';
export const REMOVE_LISTING = 'cabins/REMOVE_LISTING';

// ACTION CREATORS
const load = (listings) => {
    return {
        type: LOAD_LISTINGS,
        listings
    };
};

const add = (newListing) => {
    console.log(' ==== HIT ACTION ====')
    return {
        type: ADD_LISTING,
        newListing
    };
};

// const update = (listing) => {
    //     return {
        //         type: UPDATE_LISTING,
        //         listing
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
        dispatch(load(listings));
    };
};

// ---------- ADD LISTING THUNK
export const addListing = (listingInfo) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings`, {
        method: 'post',
        body: JSON.stringify(listingInfo)
    });

    const newListing = await res.json();

    if (newListing) {
        dispatch(add(newListing));
    };

    return newListing;
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
            };
        case ADD_LISTING:
            const newState = { ...state, [action.newListing.id]: action.newListing };
            return newState;
    default:
        return state;
    };
};

export default listingsReducer;
