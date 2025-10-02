import React from "react";
import useInputField from "../../hooks/useInputField";

const CustomHookForm = () => {
  const [name, onchangeName] = useInputField("");
  const [email, onchangeEmail] = useInputField("");
  const [password, onchangePassword] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-1 border-red-100 "
          type="text"
          name="name"
          defaultValue={name}
          onChange={onchangeName}
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="email"
          name="email"
          defaultValue={email}
          onChange={onchangeEmail}
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="password"
          name="password"
          defaultValue={password}
          onChange={onchangePassword}
          placeholder="enter your mail"
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100"
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default CustomHookForm;
