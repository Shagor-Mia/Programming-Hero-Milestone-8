import React from "react";
import { Link, useNavigate } from "react-router";

const PostCard = ({ post }) => {
  const { title, body, id } = post;
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo(`/posts/${id}`);
  };
  return (
    <div className="card bg-gray-50 rounded-lg shadow-sm p-3">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button className="btn">show Details</button>
      </Link>
      <button onClick={handleClick} className="btn">
        details:{id}
      </button>
    </div>
  );
};

export default PostCard;
