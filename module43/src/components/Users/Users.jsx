import { useLoaderData } from "react-router";
import UserCard from "./UserCard";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-3 my-5 ">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
