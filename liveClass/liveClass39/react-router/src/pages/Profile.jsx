import React from "react";
import { useLocation } from "react-router";

export const Profile = () => {
  const { state } = useLocation();
  return (
    <>
      {state ? (
        <div>
          <h1>Your Profile Information</h1>
          <p>UserName: {state.userName}</p>
          <p>UserEmail: {state.Age}</p>
          <p>UserAddress: {state.Address}</p>
        </div>
      ) : (
        <>
          <h1>Profile Information Don't Exists</h1>
        </>
      )}
    </>
  );
};
