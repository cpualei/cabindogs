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

const add = (listingId) => {
    return {
        type: ADD_LISTING,
        listingId
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
        console.log('listings', listings)
        dispatch(load(listings));
    };
};

// ---------- ADD LISTING THUNK / COULD NOT FIGURE OUT
// export const addListing = (listingInfo) => async (dispatch) => {
//     console.log('TOP OF CREATE THUNK -- DATA ->', listingInfo)
//     const res = await csrfFetch(`/api/listings`, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(listingInfo)
//     });

//     if (res.ok) {
//         const listing = await res.json();
//         dispatch(add(listing))
//         return listing
//     }
// };

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
    default:
        return state;
    };
};

export default listingsReducer;
