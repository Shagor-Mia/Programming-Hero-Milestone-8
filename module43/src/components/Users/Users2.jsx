import React, { use } from "react";

const Users2 = ({ fetchPromise }) => {
  const users2 = use(fetchPromise);
  console.log(`users2`, users2);
  return <div>Users2</div>;
};

export default Users2;
