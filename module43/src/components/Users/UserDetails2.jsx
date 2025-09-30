import React, { use } from "react";

const UserDetails2 = ({ fetchPromise }) => {
  const user = use(fetchPromise);
  const {
    name,
    address: { street, city },
  } = user;
  return (
    <div>
      <p>{name}</p>
      <p>{street}</p>
      <p>{city}</p>
    </div>
  );
};

export default UserDetails2;
