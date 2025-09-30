import React from "react";
import { useLoaderData } from "react-router";
import PostCard from "./PostCard";

const Posts = () => {
  const UserPosts = useLoaderData();
  console.log(UserPosts);
  return (
    <div className="grid grid-cols-5 gap-3 my-5 ">
      {UserPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
