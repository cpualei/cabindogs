import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/listings/");
      const listings = await response.json();
      setListings(listings);
    }
    fetchData();
  }, []);

  return (
    <div className="splash-search-container">
      <div className="splash-search-div">
        <div>
        <p id="where-to-text">WHERE TO?</p>
        <input
          id="nav-search"
          placeholder="Try typing 'California'..."
          onChange={(e) => setQuery(e.target.value)}
        />
        </div>
      </div>
      {query
        ? listings
            .filter((listing) => {
              if (listing?.state.toLowerCase().includes(query.toLowerCase())) {
                return listing;
              } else if (
                listing?.country.toLowerCase().includes(query.toLowerCase())
              ) {
                return listing;
              }
            })
            .map((listing) => (
              <div className="search-result" key={listing?.id}>
                <NavLink
                  to={`/listings/${listing?.id}`}
                  style={{ textDecoration: "none" }}
                //   className="username-result"
                >
                  <p id="listing-result">{`${listing?.state}, ${listing?.country}`}</p>
                </NavLink>
              </div>
            ))
        : null}
    </div>
  );
}

export default SearchBar;
