import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 character or bigger!");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-1 border-red-100 "
          type="text"
          name="name"
          onChange={handleName}
          defaultValue={name}
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="email"
          name="email"
          defaultValue={email}
          onChange={handleEmail}
          placeholder="enter your mail"
          required
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="password"
          name="password"
          defaultValue={password}
          onChange={handlePassword}
          placeholder="enter your password"
          required
        />
        <br />
        <br />

        <input
          className="border-1 border-red-100"
          type="submit"
          value={"Submit"}
        />
      </form>
      <p className="text-red-500">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
