import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const details = useLoaderData();
  const { body, title, userId, id } = details;
  const navigateTo = useNavigate();
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>
        <strong>Id:</strong> {id}
      </p>
      <p>
        <strong>userId:</strong> {userId}
      </p>
      <p>
        <strong>description</strong> {body}
      </p>
      <button onClick={() => navigateTo(-1)} className="btn">
        back
      </button>
    </div>
  );
};

export default PostDetails;
