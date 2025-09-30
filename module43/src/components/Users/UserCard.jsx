import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "./UserDetails2";

const UserCard = ({ user }) => {
  const [info, setInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const { name, phone, email, id } = user;
  const location = useLocation();
  console.log(location);

  if (visitHome) {
    return <Navigate to={"/"} />;
  }

  const fetchPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return (
    <div className="card bg-gray-50 rounded-lg shadow-2xl  hover: p-3">
      <h2>{name}</h2>
      <h3>{phone}</h3>
      <p>{email}</p>
      <Link to={`/users/${id}`}>
        <button className="btn">show Details</button>
      </Link>
      {}
      <button onClick={() => setInfo(!info)} className="btn">
        {info ? `show Info` : `hide Info`}
      </button>
      {info && (
        <Suspense fallback={<h1>loading....</h1>}>
          <UserDetails2 fetchPromise={fetchPromise} />
        </Suspense>
      )}

      <button onClick={() => setVisitHome(true)} className="btn">
        visit home
      </button>
    </div>
  );
};

export default UserCard;
