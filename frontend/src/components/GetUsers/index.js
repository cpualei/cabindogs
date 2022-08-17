import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../store/reviews";
import { getUsers } from "../../store/users";
import "./GetUsers.css"

const GetUsers = ({ userId }) => {
  const dispatch = useDispatch();

  const allUsers = Object.values(useSelector((state) => state.users));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {allUsers.map((user) => (
        <div key="users">
          {userId === user?.id ? <div id="review-username">{user?.username}</div> : null}
        </div>
      ))}
    </>
  );
};

export default GetUsers;
